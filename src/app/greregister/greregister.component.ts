import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentinfoComponent } from '../studentinfo/studentinfo.component';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { CandidatedataService } from '../candidatedata.service';

@Component({
  selector: 'app-greregister',
  templateUrl: './greregister.component.html',
  styleUrls: ['./greregister.component.css']
})
export class GreregisterComponent implements OnInit {

  states = ["Andrapradesh","Bihar","Madhyapradesh","Uttarpradesh","Chandigad","Kerala",
  "Karnataka","Tamilnadu","Punjab","JammuKashmir","Maharashtra"];

  studentModel = new Student('','','','','',
  9900887766,9933221155,'','','');


  constructor(public candidate: CandidatedataService) { }

  onSubmitStudentData(){
    this.candidate.sendStudentData(this.studentModel);
  }

  ngOnInit(): void {
  }

}
