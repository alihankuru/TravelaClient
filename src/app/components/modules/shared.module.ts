import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BlankComponent } from '../blank/blank.component';
import { SectionComponent } from '../section/section.component';
import { RouterLink } from '@angular/router';


@NgModule({
    declarations: [    
    ],
    imports: [
      CommonModule,
      FormsModule,
      HttpClientModule,
      BlankComponent,
      SectionComponent,
      RouterLink
    ],
    exports: [
      CommonModule,
      FormsModule,
      HttpClientModule,
      BlankComponent,
      SectionComponent,
      RouterLink
    ]
  })
  export class SharedModule { }