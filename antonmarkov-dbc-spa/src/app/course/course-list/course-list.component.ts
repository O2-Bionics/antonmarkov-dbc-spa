import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/_models/course';
import { CourseService } from 'src/app/_services/course.service';
import { AlertifyService } from 'src/app/_services/alertify.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  courses: Course[];
  constructor(private courseService: CourseService, private alertify: AlertifyService) {
  }

  ngOnInit() {
    this.loadCourses();
  }

  loadCourses() {
    this.courseService.getCourses().subscribe((courses: Course[]) => {
      this.courses = courses;
    },
      error => {
        this.alertify.error(error);
      });
  }
}
