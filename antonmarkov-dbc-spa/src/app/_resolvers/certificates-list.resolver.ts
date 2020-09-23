import { Injectable } from '@angular/core';

import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { AlertifyService } from '../_services/alertify.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CertificatesService } from '../_services/certificates.service';
import { Certificate } from '../_models/certificate';

@Injectable()
export class CertificatesListResolver implements Resolve<Certificate[]> {
  pageNumber = 1;
  pageSize = 5;

  constructor(private certificatesService: CertificatesService, private router: Router,
              private alertify: AlertifyService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<Certificate[]> {
    return this.certificatesService.getCertificates(this.pageNumber, this.pageSize).pipe(
      catchError(error => {
        this.alertify.error('Problem retrieving data');
        this.router.navigate(['/home']);
        return of(null);
      })
    );
  }
}
