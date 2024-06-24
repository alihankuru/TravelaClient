import { Component } from '@angular/core';
import { HttpService } from '../../../services/http.service';
import { PackageModel } from '../../../model/package.model';
import { HeadComponent } from '../../head/head.component';
import { SharedModule } from '../../modules/shared.module';

@Component({
  selector: 'app-package',
  standalone: true,
  imports: [HeadComponent,SharedModule],
  templateUrl: './package.component.html',
  styleUrl: './package.component.css'
})
export class PackageComponent {
  packages: PackageModel[] = [];
  search:string = "";

  constructor(
    private http: HttpService,
   
  ){}

  ngOnInit(): void {
    this.getPackageList();
  }

  getPackageList(): void {
    this.http.getPackageList().subscribe(data => {
      console.log('Data received:', data);
      this.packages = data;
    });
  }
}
