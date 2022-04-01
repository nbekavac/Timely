import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { DatePipe } from '@angular/common';



@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  date=new Date();
  constructor(private service:SharedService) { }

  ProjectList:any=[];

  ngOnInit(): void {
    this.refreshProjList();
    this.service.currentDate.subscribe(date=>this.date)
  }
  
  refreshProjList(){
    this.service.getProjList().subscribe(data=>{
      this.ProjectList=data;
    })
  }

  /*newDate(){
    this.service.changeDate(this.date=new Date())
    return this.date;
  }*/
  
  /*getDate(){
    this.date=new Date();
    let latest_date =this.datepipe.transform(this.date, 'yyyy-MM-dd');
  }*/

}
