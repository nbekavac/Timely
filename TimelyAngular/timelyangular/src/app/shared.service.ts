import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly APIUrl="https://localhost:5001/api"

  constructor(private https:HttpClient) { }

  getProjList():Observable<any[]>{
    return this.https.get<any>(this.APIUrl+'Projects');
  }

  addProj(val:any){
    return this.https.post(this.APIUrl+'/Projects', val)
  }

  date=new Date();
  private dateSource=new BehaviorSubject<Date>(this.date);
  currentDate=this.dateSource.asObservable();

  changeDate(date:Date){
    this.dateSource.next(date);
  }
}
