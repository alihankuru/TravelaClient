import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SharedModule } from '../../modules/shared.module';
import { DestinationModel } from '../../../model/destination.model';
import { HttpService } from '../../../services/http.service';
import { SwalService } from '../../../services/swal.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-admindestination',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './admindestination.component.html',
  styleUrl: './admindestination.component.css'
})
export class AdmindestinationComponent implements OnInit {
  destinations: DestinationModel[]=[];

  @ViewChild('createModalCloseBtn') createModalCloseBtn!: ElementRef<HTMLButtonElement>;
  @ViewChild('updateModalCloseBtn') updateModalCloseBtn!: ElementRef<HTMLButtonElement>;

  createModel:DestinationModel=new DestinationModel();
  updateModel:DestinationModel=new DestinationModel();

  constructor(
    private http: HttpService,
    private swal: SwalService
  ) {}

  ngOnInit(): void {
    this.getDestinationList();
  
  }

  
  getAll() {
    const apiUrl = "Destination/DestinationList";
    const body = {}; // Assuming your API doesn't require a body for this request
  
    this.http.post<DestinationModel[]>(apiUrl, body,
      (res: DestinationModel[]) => {
        console.log(res);  // Log the response to the console
        this.destinations = res; // Assign the response to your component's property
      },
      () => {
        console.error("Error occurred while fetching abouts."); // Optional: Handle error callback
      }
    );
  }



  getDestinationList(): void {
    this.http.getDestinationList().subscribe(data => {
      console.log('Data received:', data);
      this.destinations = data;
    });
  }


  create(form: NgForm){
    if(form.valid){
      this.http.post<string>("Destination",this.createModel,(res)=>{
        this.swal.callToast(res);
        this.createModel=new DestinationModel();
        this.createModalCloseBtn?.nativeElement.click();
        this.getAll();
      });
    }
  }

  onDeleteDestination(id: number): void {
    this.http.deleteDestination(id).subscribe(
      () => {
        console.log('Feature item deleted successfully');

        this.getDestinationList();
      },
      error => {
        console.error('Failed to delete Feature item', error);
        // Handle error: show error message, log, etc.
      }
    );
  }


  get(model:DestinationModel){
    this.updateModel={...model};
  }

  update(form: NgForm): void {
    if (form.valid) {
      this.http.post<string>("Destination/Update", this.updateModel, (res) => {
        console.log('Update successful', res); // Debugging log
        this.updateModel = new DestinationModel();
        this.updateModalCloseBtn.nativeElement.click(); // Ensure this references the correct button
        this.getDestinationList();
      });
    }
  }
}
