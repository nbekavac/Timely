import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-stoptimer',
  templateUrl: './stoptimer.component.html',
  styleUrls: ['./stoptimer.component.css']
})
export class StoptimerComponent implements OnInit {
  projectName:string;
  date:Date;

  onSubmit(){
    return this.projectName;
  }
  
  constructor(private service:SharedService) { }

  ngOnInit(): void {
    this.service.currentDate.subscribe(date=>this.date)
  }

}
