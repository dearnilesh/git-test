import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BatchYearComponent } from './istcosa/admin/batch-year/batch-year.component';
import { RollNumberComponent } from './istcosa/admin/roll-number/roll-number.component';
import { NComponent } from './n/n.component';

const routes: Routes = [
  {
    path:"home" ,component:HomeComponent
  },
  {
    path:"n" ,component:NComponent
  },
  {
    path:"rollNumber" ,component:RollNumberComponent
  },
  {
    path:"batchYear" ,component:BatchYearComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
