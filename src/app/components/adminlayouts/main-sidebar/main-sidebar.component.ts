import { Component } from '@angular/core';
import { Menus } from '../../../menu';
import { SharedModule } from '../../modules/shared.module';

@Component({
  selector: 'app-main-sidebar',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './main-sidebar.component.html',
  styleUrl: './main-sidebar.component.css'
})
export class MainSidebarComponent {
  menus=Menus;
}
