import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Course } from '../_models/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.baseUrl + 'courses');
  }

  getCourse(id): Observable<Course> {
    return this.http.get<Course>(this.baseUrl + 'courses/' + id);
  }
}
