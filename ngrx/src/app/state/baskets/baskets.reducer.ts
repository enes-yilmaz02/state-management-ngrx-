import {  createReducer, on } from "@ngrx/store";
import { BasketModel } from "src/app/models/basekt.model";
import * as BasketActions from './baskets.actions'

export const initialState : BasketModel[] = [];

export const BasketsReducer = createReducer(
  initialState,
  on(BasketActions.addBasket, (state , {basket})=>{

    return [...state , basket]
  })
)
