import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ServiceModel } from '../../../model/service.model';
import { HttpService } from '../../../services/http.service';
import { SwalService } from '../../../services/swal.service';
import { NgForm } from '@angular/forms';
import { SharedModule } from '../../modules/shared.module';

@Component({
  selector: 'app-adminservice',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './adminservice.component.html',
  styleUrl: './adminservice.component.css'
})
export class AdminserviceComponent implements OnInit {
  services: ServiceModel[]=[];

  @ViewChild('createModalCloseBtn') createModalCloseBtn!: ElementRef<HTMLButtonElement>;
  @ViewChild('updateModalCloseBtn') updateModalCloseBtn!: ElementRef<HTMLButtonElement>;

  createModel:ServiceModel=new ServiceModel();
  updateModel:ServiceModel=new ServiceModel();

  constructor(
    private http: HttpService,
    private swal: SwalService
  ) {}

  ngOnInit(): void {
    this.getServiceList();
  
  }

  
  getAll() {
    const apiUrl = "Services/ServiceList";
    const body = {}; // Assuming your API doesn't require a body for this request
  
    this.http.post<ServiceModel[]>(apiUrl, body,
      (res: ServiceModel[]) => {
        console.log(res);  // Log the response to the console
        this.services = res; // Assign the response to your component's property
      },
      () => {
        console.error("Error occurred while fetching abouts."); // Optional: Handle error callback
      }
    );
  }



  getServiceList(): void {
    this.http.getServiceList().subscribe(data => {
      console.log('Data received:', data);
      this.services = data;
    });
  }


  create(form: NgForm){
    if(form.valid){
      this.http.post<string>("Services",this.createModel,(res)=>{
        this.swal.callToast(res);
        this.createModel=new ServiceModel();
        this.createModalCloseBtn?.nativeElement.click();
        this.getAll();
      });
    }
  }

  onDeleteService(id: number): void {
    this.http.deleteService(id).subscribe(
      () => {
        console.log('About item deleted successfully');

        this.getServiceList();
      },
      error => {
        console.error('Failed to delete about item', error);
        // Handle error: show error message, log, etc.
      }
    );
  }


  get(model:ServiceModel){
    this.updateModel={...model};
  }

  update(form: NgForm): void {
    if (form.valid) {
      this.http.post<string>("Services/Update", this.updateModel, (res) => {
        console.log('Update successful', res); // Debugging log
        this.updateModel = new ServiceModel();
        this.updateModalCloseBtn.nativeElement.click(); // Ensure this references the correct button
        this.getServiceList();
      });
    }
  }


}
