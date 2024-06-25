import { Component } from '@angular/core';
import { HeadComponent } from '../../head/head.component';
import { SharedModule } from '../../modules/shared.module';
import { HttpService } from '../../../services/http.service';
import { CarouselModel } from '../../../model/carousel.model';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [HeadComponent,SharedModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {
  carousels: CarouselModel[] = [];
  search:string = "";

  constructor(
    private http: HttpService,
   
  ){}

  ngOnInit(): void {
    this.getCarouselList();
  }

  getCarouselList(): void {
    this.http.getCarouselList().subscribe(data => {
      console.log('Data received:', data);
      this.carousels = data;
    });
  }
}
