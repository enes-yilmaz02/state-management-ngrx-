import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { countIncrement } from 'src/app/state/counter-actions';

@Component({
  selector: 'app-add-count-state',
  templateUrl: './add-count-state.component.html',
  styleUrls: ['./add-count-state.component.css']
})
export class AddCountStateComponent {
constructor(private store:Store<any>){}

  addCount(){
    this.store.dispatch(countIncrement());
  }

}
