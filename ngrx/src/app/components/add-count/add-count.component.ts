import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-count',
  templateUrl: './add-count.component.html',
  styleUrls: ['./add-count.component.css']
})
export class AddCountComponent {
  number:number = 0;

  @Output() Event = new EventEmitter<any>();

  addCount(){
    this.number += 1;
    this.Event.emit(this.number);
  }
}
