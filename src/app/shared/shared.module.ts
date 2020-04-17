import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonDataService } from './_services/person-data.service';
import { HttpClientModule } from '@angular/common/http';
import { interceptors } from './_interceptors/shared.interceptors';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AppRoutingModule
  ],
  exports: [
    AppRoutingModule
  ],
  providers: [
    interceptors,
    PersonDataService
  ]
})
export class SharedModule { }
