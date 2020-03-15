import { Component, OnInit, ViewChild } from '@angular/core';
import { Course } from '../courses/course.model';
import { CourseListService } from '../courses/courses.service';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-uncompleted',
  templateUrl: './uncompleted.component.html',
  styleUrls: ['./uncompleted.component.css']
})
export class UncompletedComponent implements OnInit {
  displayedColumns: string[] = ['name', 'upcoming'];
  dataSource = new MatTableDataSource<Course>();
  checked=true;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private courseListService: CourseListService){}
  ngOnInit() {
    this.dataSource.data = this.courseListService.getUncompleted();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
