import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { BasketModel } from 'src/app/models/basekt.model';
import { ProductModel } from 'src/app/models/product.model';
import * as BasketActions from '../../state/baskets/baskets.actions'
import { Stores } from 'src/app/state/baskets/stores';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  products : ProductModel[] = []
  constructor(private _store:Store<Stores["baskets"]>){
    this.setProducts();
  }

  setProducts(){
    for (let index = 0; index < 100; index++) {
      let product = new ProductModel();
      product.id = index ;
      product.name = `Product ${index}`;
      product.unitPrice = index*10;
      product.stock = index*100;
      this.products.push(product)
    }
  }

  addBasket(product : ProductModel){
    let basketModel = new BasketModel();
    basketModel.product=product;
    basketModel.quantity=1;
    this._store.dispatch(BasketActions.addBasket({basket:basketModel}))
  }
}
