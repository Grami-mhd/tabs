import { NgModule }                         from '@angular/core';
import { CommonModule }                     from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FlexLayoutModule } from '@angular/flex-layout'
import { MatCardModule }    from '@angular/material/card';
import { MatChipsModule }   from '@angular/material/chips';
import { MatSelectModule }  from '@angular/material/select';

import { WakeWordComponent }          from './wake-word/wake-word.component';
import { IntentRecognitionComponent } from './intent-recognition/intent-recognition.component';

const compoenents = [
  IntentRecognitionComponent,
  WakeWordComponent
];

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    MatCardModule,
    MatChipsModule,
    MatSelectModule,
    FlexLayoutModule,
    ReactiveFormsModule
  ],
  declarations: compoenents,
  exports: compoenents
})
export class ComponentsModule { }
