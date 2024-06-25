import { Component, ElementRef, ViewChild } from '@angular/core';
import { TeamModel } from '../../../model/team.model';
import { HttpService } from '../../../services/http.service';
import { SwalService } from '../../../services/swal.service';
import { NgForm } from '@angular/forms';
import { SharedModule } from '../../modules/shared.module';

@Component({
  selector: 'app-adminteam',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './adminteam.component.html',
  styleUrl: './adminteam.component.css'
})
export class AdminteamComponent {
  teams: TeamModel[]=[];

  @ViewChild('createModalCloseBtn') createModalCloseBtn!: ElementRef<HTMLButtonElement>;
  @ViewChild('updateModalCloseBtn') updateModalCloseBtn!: ElementRef<HTMLButtonElement>;

  createModel:TeamModel=new TeamModel();
  updateModel:TeamModel=new TeamModel();

  constructor(
    private http: HttpService,
    private swal: SwalService
  ) {}

  ngOnInit(): void {
    this.getTeamList();
  
  }

  
  getAll() {
    const apiUrl = "Guides/GuideList";
    const body = {}; // Assuming your API doesn't require a body for this request
  
    this.http.post<TeamModel[]>(apiUrl, body,
      (res: TeamModel[]) => {
        console.log(res);  // Log the response to the console
        this.teams = res; // Assign the response to your component's property
      },
      () => {
        console.error("Error occurred while fetching abouts."); // Optional: Handle error callback
      }
    );
  }



  getTeamList(): void {
    this.http.getTeamList().subscribe(data => {
      console.log('Data received:', data);
      this.teams = data;
    });
  }


  create(form: NgForm){
    if(form.valid){
      this.http.post<string>("Guides",this.createModel,(res)=>{
        this.swal.callToast(res);
        this.createModel=new TeamModel();
        this.createModalCloseBtn?.nativeElement.click();
        this.getAll();
      });
    }
  }

  onDeleteTeam(id: number): void {
    this.http.deleteTeam(id).subscribe(
      () => {
        console.log('Feature item deleted successfully');

        this.getTeamList();
      },
      error => {
        console.error('Failed to delete Feature item', error);
        // Handle error: show error message, log, etc.
      }
    );
  }


  get(model:TeamModel){
    this.updateModel={...model};
  }

  update(form: NgForm): void {
    if (form.valid) {
      this.http.post<string>("Guides/Update", this.updateModel, (res) => {
        console.log('Update successful', res); // Debugging log
        this.updateModel = new TeamModel();
        this.updateModalCloseBtn.nativeElement.click(); // Ensure this references the correct button
        this.getTeamList();
      });
    }
  }

}
