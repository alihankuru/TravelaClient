import { Component, ElementRef, ViewChild } from '@angular/core';
import { PackageModel } from '../../../model/package.model';
import { HttpService } from '../../../services/http.service';
import { SwalService } from '../../../services/swal.service';
import { NgForm } from '@angular/forms';
import { SharedModule } from '../../modules/shared.module';

@Component({
  selector: 'app-adminpackage',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './adminpackage.component.html',
  styleUrl: './adminpackage.component.css'
})
export class AdminpackageComponent {
  packages: PackageModel[]=[];

  @ViewChild('createModalCloseBtn') createModalCloseBtn!: ElementRef<HTMLButtonElement>;
  @ViewChild('updateModalCloseBtn') updateModalCloseBtn!: ElementRef<HTMLButtonElement>;

  createModel:PackageModel=new PackageModel();
  updateModel:PackageModel=new PackageModel();

  constructor(
    private http: HttpService,
    private swal: SwalService
  ) {}

  ngOnInit(): void {
    this.getPackageList();
  
  }

  
  getAll() {
    const apiUrl = "Packages/PackageList";
    const body = {}; // Assuming your API doesn't require a body for this request
  
    this.http.post<PackageModel[]>(apiUrl, body,
      (res: PackageModel[]) => {
        console.log(res);  // Log the response to the console
        this.packages = res; // Assign the response to your component's property
      },
      () => {
        console.error("Error occurred while fetching abouts."); // Optional: Handle error callback
      }
    );
  }



  getPackageList(): void {
    this.http.getPackageList().subscribe(data => {
      console.log('Data received:', data);
      this.packages = data;
    });
  }


  create(form: NgForm){
    if(form.valid){
      this.http.post<string>("Packages",this.createModel,(res)=>{
        this.swal.callToast(res);
        this.createModel=new PackageModel();
        this.createModalCloseBtn?.nativeElement.click();
        this.getAll();
      });
    }
  }

  onDeletePackage(id: number): void {
    this.http.deletePackage(id).subscribe(
      () => {
        console.log('About item deleted successfully');

        this.getPackageList();
      },
      error => {
        console.error('Failed to delete about item', error);
        // Handle error: show error message, log, etc.
      }
    );
  }


  get(model:PackageModel){
    this.updateModel={...model};
  }

  update(form: NgForm): void {
    if (form.valid) {
      this.http.post<string>("Packages/Update", this.updateModel, (res) => {
        console.log('Update successful', res); // Debugging log
        this.updateModel = new PackageModel();
        this.updateModalCloseBtn.nativeElement.click(); // Ensure this references the correct button
        this.getPackageList();
      });
    }
  }


}
