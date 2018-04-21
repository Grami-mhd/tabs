/**
 * framework imports
 */
import { NgModule }         from '@angular/core';
import { CommonModule }     from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
/**
 * project imports
 */
import { DataSetService } from './data-set.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [DataSetService]
})
export class ServicesModule { }
