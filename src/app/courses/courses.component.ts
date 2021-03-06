import { CoursesService } from './courses.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  websiteName: string;

  courses: string[];

  constructor(private coursesServices: CoursesService) { 
    this.websiteName = 'https://www.udemy.com/';

    /* 
    *ngFor="let course of courses" it's like the example bellow
    
    for (let i=0; i < this.courses.length; i++) { 
      let course = this.courses[i];
    }*/

    //var service = new CoursesService();

    this.courses = this.coursesServices.getCourses();
  }

  ngOnInit() {
  }

}
