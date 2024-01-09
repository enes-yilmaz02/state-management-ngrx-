import { Component } from '@angular/core';
import { CountService } from 'src/app/services/count.service';

@Component({
  selector: 'app-count-service',
  templateUrl: './count-service.component.html',
  styleUrls: ['./count-service.component.css']
})
export class CountServiceComponent {
  constructor(public _count:CountService){}
}
