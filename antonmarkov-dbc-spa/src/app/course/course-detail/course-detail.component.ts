import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/_models/course';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from 'src/app/_services/course.service';
import { AlertifyService } from 'src/app/_services/alertify.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {

  course: Course;
  constructor(private courseService: CourseService, private alertify: AlertifyService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => this.course = data.course);
  }
}
