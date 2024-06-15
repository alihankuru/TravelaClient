import { Component } from '@angular/core';
import { HeadComponent } from '../../head/head.component';
import { SharedModule } from '../../modules/shared.module';
import { AboutModel } from '../../../model/about.model';
import { HttpService } from '../../../services/http.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [HeadComponent,SharedModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  abouts: AboutModel[] = [];
  search:string = "";

  constructor(
    private http: HttpService,
   
  ){}

  ngOnInit(): void {
    this.getAboutList();
  }

  getAboutList(): void {
    this.http.getAboutList().subscribe(data => {
      console.log('Data received:', data);
      this.abouts = data;
    });
  }
}
