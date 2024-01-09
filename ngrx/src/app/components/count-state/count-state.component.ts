import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-count-state',
  templateUrl: './count-state.component.html',
  styleUrls: ['./count-state.component.css']
})
export class CountStateComponent {
  number$:Observable<number>
  constructor(private store:Store<{number :number}>){
    this.number$ = this.store.select("number")
  }
}
