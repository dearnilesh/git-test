import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { ButtonModule } from 'primeng/button';
import { RollNumberComponent } from './istcosa/admin/roll-number/roll-number.component';
import { AccordionModule } from 'primeng/accordion';
import { PanelModule } from 'primeng/panel';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { SideHeaderComponent } from './side-header/side-header.component';

import { NComponent } from './n/n.component';
import { BatchYearComponent } from './istcosa/admin/batch-year/batch-year.component';
import { AdminServiceService } from './istcosa/services/admin-service.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RollNumberComponent,
    HeaderComponent,
    SideHeaderComponent,

    NComponent,
    BatchYearComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    ButtonModule,
    AccordionModule,
    PanelModule,
    ButtonModule,

    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,



  ],
  providers: [ AdminServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
