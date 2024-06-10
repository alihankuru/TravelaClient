import { Component } from '@angular/core';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { BookingComponent } from './booking/booking.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FeatureComponent } from './feature/feature.component';
import { PackageComponent } from './package/package.component';
import { RegisterComponent } from './register/register.component';
import { ServiceComponent } from './service/service.component';
import { TeamComponent } from './team/team.component';
import { DestinationComponent } from './destination/destination.component';
import { TestimonialComponent } from './testimonial/testimonial.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AboutComponent,BlogComponent,BookingComponent,CarouselComponent,FeatureComponent,PackageComponent,RegisterComponent,ServiceComponent,TeamComponent,DestinationComponent,TestimonialComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
