import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Certificate } from '../_models/certificate';
import { PaginatedResult } from '../_models/pagination';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CertificatesService {
  baseUrl = 'https://api.o2bus.com/api/v1.0/apps/';

  constructor(private http: HttpClient) { }

  getCertificates(page?, itemsPerPage?, certificateParams?, likesParam?): Observable<PaginatedResult<Certificate[]>> {
    const paginatedResult: PaginatedResult<Certificate[]> = new PaginatedResult<Certificate[]>();

    let params = new HttpParams();

    if (page != null && itemsPerPage != null) {
      params = params.append('pageNumber', page);
      params = params.append('pageSize', itemsPerPage);
    }


    return this.http.get<Certificate[]>(this.baseUrl + 'certificates', { observe: 'response', params })
      .pipe(
        map(response => {
          paginatedResult.result = response.body;
          if (response.headers.get('Pagination') != null) {
            paginatedResult.pagination = JSON.parse(response.headers.get('Pagination'));
          }
          return paginatedResult;
        })
      );
  }


  getCertificate(id): Observable<Certificate> {
    return this.http.get<Certificate>(this.baseUrl + 'certificates/' + id);
  }
}
