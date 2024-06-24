import { Component } from '@angular/core';
import { HeadComponent } from '../../head/head.component';
import { SharedModule } from '../../modules/shared.module';
import { TeamModel } from '../../../model/team.model';
import { HttpService } from '../../../services/http.service';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [HeadComponent,SharedModule],
  templateUrl: './team.component.html',
  styleUrl: './team.component.css'
})
export class TeamComponent {
  teams: TeamModel[] = [];
  search:string = "";

  constructor(
    private http: HttpService,
   
  ){}

  ngOnInit(): void {
    this.getTeamList();
  }

  getTeamList(): void {
    this.http.getTeamList().subscribe(data => {
      console.log('Data received:', data);
      this.teams = data;
    });
  }
}
