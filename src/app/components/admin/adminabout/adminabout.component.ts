import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SharedModule } from '../../modules/shared.module';
import { HttpService } from '../../../services/http.service';
import { AboutModel } from '../../../model/about.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-adminabout',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './adminabout.component.html',
  styleUrl: './adminabout.component.css'
})
export class AdminaboutComponent implements OnInit {

  abouts: AboutModel[]=[];

  @ViewChild('createModalCloseBtn') createModalCloseBtn!: ElementRef<HTMLButtonElement>;
  @ViewChild('updateModalCloseBtn') updateModalCloseBtn!: ElementRef<HTMLButtonElement>;

  createModel:AboutModel=new AboutModel();
  updateModel:AboutModel=new AboutModel();

  constructor(
    private http: HttpService
  ) {}

  ngOnInit(): void {
    this.getAboutList();
  
  }

  
  getAll() {
    const apiUrl = "Abouts/AboutList";
    const body = {}; // Assuming your API doesn't require a body for this request
  
    this.http.post<AboutModel[]>(apiUrl, body,
      (res: AboutModel[]) => {
        console.log(res);  // Log the response to the console
        this.abouts = res; // Assign the response to your component's property
      },
      () => {
        console.error("Error occurred while fetching abouts."); // Optional: Handle error callback
      }
    );
  }



  getAboutList(): void {
    this.http.getAboutList().subscribe(data => {
      console.log('Data received:', data);
      this.abouts = data;
    });
  }

  create(form:NgForm){
    if(form.valid){
      this.http.post<string>("Abouts",this.createModel,(res)=>{
        this.createModel=new AboutModel();
        this.createModalCloseBtn.nativeElement.click();
        this.getAboutList();
      });
    }
  }


  onDeleteAbout(id: number): void {
    this.http.deleteAbout(id).subscribe(
      () => {
        console.log('About item deleted successfully');
        this.getAboutList();
      },
      error => {
        console.error('Failed to delete about item', error);
        // Handle error: show error message, log, etc.
      }
    );
  }

  updateAbout(): void {
    this.http.updateAbout(this.updateModel)
      .subscribe(
        response => {
          console.log('Update successful', response); // Handle success as per your application's needs
          // Optionally, reset form or perform any additional actions upon success
        },
        error => {
          console.error('Update failed', error); // Handle errors as per your application's needs
        }
      );
  }
 

  get(model:AboutModel){
    this.updateModel={...model};
  }

  update(form:NgForm){
    if(form.valid){
      this.http.post<string>("Abouts/Update",this.updateModel,(res)=>{

        this.updateModalCloseBtn.nativeElement.click();
        this.getAboutList();
      });
    }
  }

}
