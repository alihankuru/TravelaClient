import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LayoutsComponent } from './components/layouts/layouts.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ServiceComponent } from './components/service/service.component';
import { PackageComponent } from './components/package/package.component';
import { ContactComponent } from './components/contact/contact.component';
import { AdminlayoutsComponent } from './components/adminlayouts/adminlayouts.component';
import { AdminhomeComponent } from './components/adminhome/adminhome.component';

export const routes: Routes = [
    {
        path:"login",
        component: LoginComponent
    },
    {
        path: 'about',
        component: LayoutsComponent,
        children: [
          {
            path: '',
            component: AboutComponent
          }
        ]
    },
    {
        path: 'service',
        component: LayoutsComponent,
        children: [
          {
            path: '',
            component: ServiceComponent
          }
        ]
    },
    {
        path: 'package',
        component: LayoutsComponent,
        children: [
          {
            path: '',
            component: PackageComponent
          }
        ]
    },
    {
      path: 'contact',
      component: LayoutsComponent,
      children: [
        {
          path: '',
          component: ContactComponent
        }
      ]
  },{
    path: 'adminhome',
    component: AdminlayoutsComponent,
    children: [
      {
        path: '',
        component: AdminhomeComponent
      }
    ]
  },
    {
        path:"",
        component: LayoutsComponent,
        children:[
            {
                path:"",
                component:HomeComponent
            }
        ]
    }
];
