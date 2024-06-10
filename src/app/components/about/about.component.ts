import { Component } from '@angular/core';
import { HeadComponent } from '../head/head.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [HeadComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
