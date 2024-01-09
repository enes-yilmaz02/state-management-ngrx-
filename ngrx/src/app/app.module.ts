import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { CountComponent } from './components/count/count.component';
import { AddCountComponent } from './components/add-count/add-count.component';
import { AddCountServiceComponent } from './components/add-count-service/add-count-service.component';
import { CountServiceComponent } from './components/count-service/count-service.component';
import { AddCountStateComponent } from './components/add-count-state/add-count-state.component';
import { CountStateComponent } from './components/count-state/count-state.component';
import { CounterReducer } from './state/counter.reducer';
import { LayoutsComponent } from './e-commerce/layouts/layouts.component';
import { NavbarComponent } from './e-commerce/layouts/navbar/navbar.component';
import { HomeComponent } from './e-commerce/home/home.component';
import { BasketsReducer } from './state/baskets/baskets.reducer';
import { Reducers } from './state/baskets/reducers';

@NgModule({
  declarations: [
    AppComponent,
    CountComponent,
    AddCountComponent,
    AddCountServiceComponent,
    CountServiceComponent,
    AddCountStateComponent,
    CountStateComponent,
    LayoutsComponent,
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(
      Reducers.baskets
    //   {
    //   number : CounterReducer
    // },
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
