import {Component, OnInit, ViewChild, Output, EventEmitter} from '@angular/core';
import { CourseListService } from './courses/courses.service';
import { MatSlideToggleChange } from '@angular/material';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
  providers: [CourseListService]

})
export class EducationComponent implements OnInit {
completed = false;
showClasses = false;
@Output()change: EventEmitter<MatSlideToggleChange>

  constructor(){}
  ngOnInit() {
    this.completed= true;

  }

  onChange(){
   this.showClasses = true;
   this.completed = !this.completed;
  }

  onShow(){
    this.showClasses = !this.showClasses;
  }
}
