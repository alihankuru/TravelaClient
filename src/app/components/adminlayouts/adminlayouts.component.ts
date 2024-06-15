import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { MainSidebarComponent } from './main-sidebar/main-sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { ControlSidebarComponent } from './control-sidebar/control-sidebar.component';

@Component({
  selector: 'app-adminlayouts',
  standalone: true,
  imports: [RouterOutlet,NavbarComponent,MainSidebarComponent,FooterComponent,ControlSidebarComponent],
  templateUrl: './adminlayouts.component.html',
  styleUrl: './adminlayouts.component.css'
})
export class AdminlayoutsComponent {

}
