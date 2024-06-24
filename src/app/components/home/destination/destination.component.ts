import { Component } from '@angular/core';
import { HttpService } from '../../../services/http.service';
import { DestinationModel } from '../../../model/destination.model';
import { SharedModule } from '../../modules/shared.module';
import { HeadComponent } from '../../head/head.component';

@Component({
  selector: 'app-destination',
  standalone: true,
  imports: [HeadComponent,SharedModule],
  templateUrl: './destination.component.html',
  styleUrl: './destination.component.css'
})
export class DestinationComponent {
  destinations: DestinationModel[] = [];
  search:string = "";

  constructor(
    private http: HttpService,
   
  ){}

  ngOnInit(): void {
    this.getDestinationList();
  }

  getDestinationList(): void {
    this.http.getDestinationList().subscribe(data => {
      console.log('Data received:', data);
      this.destinations = data;
    });
  }
}
