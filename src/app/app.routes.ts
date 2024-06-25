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
import { AdminaboutComponent } from './components/admin/adminabout/adminabout.component';
import { AdminfeatureComponent } from './components/admin/adminfeature/adminfeature.component';
import { AdmindestinationComponent } from './components/admin/admindestination/admindestination.component';
import { AdminserviceComponent } from './components/admin/adminservice/adminservice.component';
import { AdminpackageComponent } from './components/admin/adminpackage/adminpackage.component';
import { AdminteamComponent } from './components/admin/adminteam/adminteam.component';

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
    },{
      path: 'adminabout',
      component: AdminlayoutsComponent,
      children: [
        {
          path: '',
          component: AdminaboutComponent
        }
      ]
    },{
      path: 'adminfeature',
      component: AdminlayoutsComponent,
      children: [
        {
          path: '',
          component: AdminfeatureComponent
        }
      ]
    },{
      path: 'admindestination',
      component: AdminlayoutsComponent,
      children: [
        {
          path: '',
          component: AdmindestinationComponent
        }
      ]
    },
    {
      path: 'adminservice',
      component: AdminlayoutsComponent,
      children: [
        {
          path: '',
          component: AdminserviceComponent
        }
      ]
    },
    {
      path: 'adminpackage',
      component: AdminlayoutsComponent,
      children: [
        {
          path: '',
          component: AdminpackageComponent
        }
      ]
    },
    {
      path: 'adminteam',
      component: AdminlayoutsComponent,
      children: [
        {
          path: '',
          component: AdminteamComponent
        }
      ]
    }
];
