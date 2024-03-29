import { createReducer, on } from "@ngrx/store";
import { countIncrement } from "./counter-actions";

export const initialCount = 0 ;

export const CounterReducer = createReducer(
  initialCount,
  on(countIncrement , (state)=>state += 1)
)
