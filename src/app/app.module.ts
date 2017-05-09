import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {Navigator} from './components/navigator/navigator.component';
import {Profile} from './components/profile/profile.component';
import {About} from './components/about/about.component';
import {routing} from './app.routing';


@NgModule({
  imports:      [ BrowserModule,routing ],
  declarations: [ AppComponent,Navigator,About,Profile ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
