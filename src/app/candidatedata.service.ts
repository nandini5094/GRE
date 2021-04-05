import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class CandidatedataService {

  public _studentinformationsource = new Subject<Student>();
  studentinformation$ = this._studentinformationsource.asObservable();

  constructor() { }

  sendStudentData(message:Student){
    this._studentinformationsource.next(message);
  }
}
