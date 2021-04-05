import { Component, OnInit } from '@angular/core';
import { CandidatedataService } from '../candidatedata.service';
import { Student } from '../student';

@Component({
  selector: 'app-studentinfo',
  templateUrl: './studentinfo.component.html',
  styleUrls: ['./studentinfo.component.css']
})
export class StudentinfoComponent implements OnInit {

  constructor(private _candidate:CandidatedataService) { }

  studentData;
  

  ngOnInit(): void {
    this._candidate.studentinformation$
    .subscribe(
      message => {
        this.studentData = message;
        console.log(this.studentData);
      }
    );
  }

}
