import { Component } from '@angular/core';
import { HeadComponent } from '../../head/head.component';
import { SharedModule } from '../../modules/shared.module';
import { ServiceModel } from '../../../model/service.model';
import { HttpService } from '../../../services/http.service';

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [HeadComponent,SharedModule],
  templateUrl: './service.component.html',
  styleUrl: './service.component.css'
})
export class ServiceComponent {
  services: ServiceModel[] = [];
  search:string = "";

  constructor(
    private http: HttpService,
   
  ){}

  ngOnInit(): void {
    this.getServiceList();
  }

  getServiceList(): void {
    this.http.getServiceList().subscribe(data => {
      console.log('Data received:', data);
      this.services = data;
    });
  }
  
}
