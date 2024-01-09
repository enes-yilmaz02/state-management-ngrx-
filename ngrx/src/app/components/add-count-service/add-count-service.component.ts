import { Component } from '@angular/core';
import { CountService } from 'src/app/services/count.service';

@Component({
  selector: 'app-add-count-service',
  templateUrl: './add-count-service.component.html',
  styleUrls: ['./add-count-service.component.css']
})
export class AddCountServiceComponent {
  constructor(private _count:CountService){}
  addCount(){
    this._count.number += 1 ;

  }
}
