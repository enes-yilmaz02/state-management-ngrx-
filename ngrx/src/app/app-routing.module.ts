import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutsComponent } from './e-commerce/layouts/layouts.component';
import { HomeComponent } from './e-commerce/home/home.component';

const routes: Routes = [
  { path: '', component:LayoutsComponent , children:[
    {path:'' , component:HomeComponent}
  ] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
