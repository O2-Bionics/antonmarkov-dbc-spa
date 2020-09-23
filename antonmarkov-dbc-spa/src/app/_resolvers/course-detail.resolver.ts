import { Injectable } from '@angular/core';
import { Resolve, Route, Router, ActivatedRouteSnapshot } from '@angular/router';
import { AlertifyService } from '../_services/alertify.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CourseService } from '../_services/course.service';
import { Course } from '../_models/course';

@Injectable()
export class CourseDetailResolver implements Resolve<Course> {
    constructor(private courseService: CourseService, private router: Router, private alertify: AlertifyService) { }

    resolve(route: ActivatedRouteSnapshot): Observable<Course> {
        return this.courseService.getCourse(route.params.id).pipe(catchError(error => {
            this.alertify.error('Problem retrieving data');
            this.router.navigate(['/courses']);
            return of(null);
        })
        );
    }
}
