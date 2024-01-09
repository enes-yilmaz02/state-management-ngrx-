import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { CountComponent } from './components/count/count.component';
import { AddCountComponent } from './components/add-count/add-count.component';
import { AddCountServiceComponent } from './components/add-count-service/add-count-service.component';
import { CountServiceComponent } from './components/count-service/count-service.component';

@NgModule({
  declarations: [
    AppComponent,
    CountComponent,
    AddCountComponent,
    AddCountServiceComponent,
    CountServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
