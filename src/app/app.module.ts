/**
 * framework imports
 */
import { NgModule }                from '@angular/core';
import { BrowserModule }           from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
/**
 * plugins imports
 */
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTabsModule }    from '@angular/material/tabs';
import { MatIconModule }    from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
/**
 * project imports
 */
import { AppComponent }     from './app.component';
import { ServicesModule }   from './services/services.module';
import { ComponentsModule } from './components/components.module';


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
