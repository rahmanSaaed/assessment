import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  constructor() { }

  private assessmentDataSubject = new BehaviorSubject<any>(null); 
  assessmentData$ = this.assessmentDataSubject.asObservable(); 

 
  setAssessmentData(data: any): void {
    this.assessmentDataSubject.next(data);
  }

  getAssessmentData(): any {
    return this.assessmentDataSubject.value;
  }


}
