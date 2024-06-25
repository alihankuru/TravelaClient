import { Component } from '@angular/core';
import { HttpService } from '../../../services/http.service';
import { FooterModel } from '../../../model/footer.model';
import { HeadComponent } from '../../head/head.component';
import { SharedModule } from '../../modules/shared.module';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [HeadComponent,SharedModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  footers: FooterModel[] = [];
  search:string = "";

  constructor(
    private http: HttpService,
   
  ){}

  ngOnInit(): void {
    this.getFooterList();
  }

  getFooterList(): void {
    this.http.getFooterList().subscribe(data => {
      console.log('Data received:', data);
      this.footers = data;
    });
  }

}
