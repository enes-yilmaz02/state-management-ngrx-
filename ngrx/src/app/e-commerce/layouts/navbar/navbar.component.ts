import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { BasketModel } from 'src/app/models/basekt.model';
import { Stores } from 'src/app/state/baskets/stores';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  basketCount$ = 0 ;
  baskets$ : BasketModel[] = []
  constructor(
    private _store:Store<Stores["baskets"]>
  ){
    this._store.select("baskets").subscribe((res:any)=>{
      this.basketCount$ = res.length;
      this.baskets$ = res ;
    })
  }
}
