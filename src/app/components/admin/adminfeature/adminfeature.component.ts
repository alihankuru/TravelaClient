import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SharedModule } from '../../modules/shared.module';
import { FeatureModel } from '../../../model/feature.model';
import { HttpService } from '../../../services/http.service';
import { SwalService } from '../../../services/swal.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-adminfeature',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './adminfeature.component.html',
  styleUrl: './adminfeature.component.css'
})
export class AdminfeatureComponent implements OnInit{
  features: FeatureModel[]=[];

  @ViewChild('createModalCloseBtn') createModalCloseBtn!: ElementRef<HTMLButtonElement>;
  @ViewChild('updateModalCloseBtn') updateModalCloseBtn!: ElementRef<HTMLButtonElement>;

  createModel:FeatureModel=new FeatureModel();
  updateModel:FeatureModel=new FeatureModel();

  constructor(
    private http: HttpService,
    private swal: SwalService
  ) {}

  ngOnInit(): void {
    this.getFeatureList();
  
  }

  
  getAll() {
    const apiUrl = "Features/FeatureList";
    const body = {}; // Assuming your API doesn't require a body for this request
  
    this.http.post<FeatureModel[]>(apiUrl, body,
      (res: FeatureModel[]) => {
        console.log(res);  // Log the response to the console
        this.features = res; // Assign the response to your component's property
      },
      () => {
        console.error("Error occurred while fetching abouts."); // Optional: Handle error callback
      }
    );
  }



  getFeatureList(): void {
    this.http.getFeatureList().subscribe(data => {
      console.log('Data received:', data);
      this.features = data;
    });
  }


  create(form: NgForm){
    if(form.valid){
      this.http.post<string>("Features",this.createModel,(res)=>{
        this.swal.callToast(res);
        this.createModel=new FeatureModel();
        this.createModalCloseBtn?.nativeElement.click();
        this.getAll();
      });
    }
  }

  onDeleteFeature(id: number): void {
    this.http.deleteFeature(id).subscribe(
      () => {
        console.log('Feature item deleted successfully');

        this.getFeatureList();
      },
      error => {
        console.error('Failed to delete Feature item', error);
        // Handle error: show error message, log, etc.
      }
    );
  }


  get(model:FeatureModel){
    this.updateModel={...model};
  }

  update(form: NgForm): void {
    if (form.valid) {
      this.http.post<string>("Features/Update", this.updateModel, (res) => {
        console.log('Update successful', res); // Debugging log
        this.updateModel = new FeatureModel();
        this.updateModalCloseBtn.nativeElement.click(); // Ensure this references the correct button
        this.getFeatureList();
      });
    }
  }

}
