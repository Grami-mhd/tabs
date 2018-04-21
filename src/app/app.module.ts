import { NgModule }                from '@angular/core';
import { BrowserModule }           from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatTabsModule } from '@angular/material/tabs';

import { AppComponent }     from './app.component';
import { ServicesModule }  from './services/services.module';
import { ComponentsModule } from './components/components.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatIconModule, MatTooltipModule} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MatTabsModule,
    MatIconModule,
    ServicesModule,
    ComponentsModule,
    MatTooltipModule,
    FlexLayoutModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
