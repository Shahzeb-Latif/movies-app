import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MoviesRoutingModule } from './movies-routing.module';
import { IndexComponent } from './index/index.component';
import { DetailComponent } from './detail/detail.component';
import { FavourtieComponent } from './favourtie/favourtie.component';
// search module
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [IndexComponent, DetailComponent, FavourtieComponent],
  imports: [
    CommonModule,
    FormsModule,
    MoviesRoutingModule,
     Ng2SearchPipeModule,
     NgxPaginationModule
  ]
})
export class MoviesModule { }
