import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { FooterComponent } from './components/footer/footer.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { HomeAdmComponent } from './admin/components/home-adm/home-adm.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { OptionsAdmComponent } from './admin/components/options-adm/options-adm.component';
import { CreateEventComponent } from './admin/components/create-event/create-event.component';
import { ListEventsComponent } from './admin/components/list-events/list-events.component';


const material = [
  MatToolbarModule,
  MatButtonModule,
  MatFormFieldModule,
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    ToolbarComponent,
    HomeAdmComponent,
    OptionsAdmComponent,
    CreateEventComponent,
    ListEventsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    material
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
