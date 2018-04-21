/**
 * framework imports
 */
import { NgModule }                         from '@angular/core';
import { CommonModule }                     from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
/**
 * plugins imports
 */
import { FlexLayoutModule } from '@angular/flex-layout'
import { MatCardModule }    from '@angular/material/card';
import { MatChipsModule }   from '@angular/material/chips';
import { MatSelectModule }  from '@angular/material/select';
/**
 * project imports
 */
import { WakeWordComponent }          from './wake-word/wake-word.component';
import { IntentRecognitionComponent } from './intent-recognition/intent-recognition.component';

/**
 * array of personal components to avoid repetition
 * @type []
 */
const components = [
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
  declarations: components,
  exports: components
})
export class ComponentsModule { }
