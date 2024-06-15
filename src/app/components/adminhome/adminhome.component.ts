import { Component } from '@angular/core';
import { BlankComponent } from '../blank/blank.component';
import { SectionComponent } from '../section/section.component';
import { SharedModule } from '../modules/shared.module';

@Component({
  selector: 'app-adminhome',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './adminhome.component.html',
  styleUrl: './adminhome.component.css'
})
export class AdminhomeComponent {

}
