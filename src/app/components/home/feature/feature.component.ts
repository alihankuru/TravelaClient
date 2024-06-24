import { Component } from '@angular/core';
import { HttpService } from '../../../services/http.service';
import { FeatureModel } from '../../../model/feature.model';
import { HeadComponent } from '../../head/head.component';
import { SharedModule } from '../../modules/shared.module';

@Component({
  selector: 'app-feature',
  standalone: true,
  imports: [HeadComponent,SharedModule],
  templateUrl: './feature.component.html',
  styleUrl: './feature.component.css'
})
export class FeatureComponent {
  features: FeatureModel[] = [];
  search:string = "";

  constructor(
    private http: HttpService,
   
  ){}

  ngOnInit(): void {
    this.getFeatureList();
  }

  getFeatureList(): void {
    this.http.getFeatureList().subscribe(data => {
      console.log('Data received:', data);
      this.features = data;
    });
  }

}
