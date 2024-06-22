import { Component } from '@angular/core';
import { Menus } from '../../../menu';
import { SharedModule } from '../../modules/shared.module';
import { RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-main-sidebar',
  standalone: true,
  imports: [SharedModule,RouterLinkActive],
  templateUrl: './main-sidebar.component.html',
  styleUrl: './main-sidebar.component.css'
})
export class MainSidebarComponent {
  menus=Menus;
}
