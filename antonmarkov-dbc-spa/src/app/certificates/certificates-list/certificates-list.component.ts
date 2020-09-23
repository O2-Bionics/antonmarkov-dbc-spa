
import { Component, OnInit } from '@angular/core';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';
import { Pagination, PaginatedResult } from 'src/app/_models/pagination';
import { Certificate } from 'src/app/_models/certificate';
import { CertificatesService } from 'src/app/_services/certificates.service';


@Component({
  selector: 'app-certificates-list',
  templateUrl: './certificates-list.component.html',
  styleUrls: ['./certificates-list.component.scss']
})
export class CertificatesListComponent implements OnInit {

  certificates: Certificate[];

  pagination: Pagination;

  constructor(private certificatesService: CertificatesService,
              private route: ActivatedRoute,
              private alertify: AlertifyService) {
  }

ngOnInit() {
    this.route.data.subscribe(data => {
      this.certificates = data.certificates.result;
      this.pagination = data.certificates.pagination;
    });

  }

  pageChanged(event: any): void {
    this.pagination.currentPage = event.page;
    this.loadCertificates();
  }

  loadCertificates() {
    this.certificatesService.getCertificates(this.pagination.currentPage, this.pagination.itemsPerPage)
      .subscribe((res: PaginatedResult<Certificate[]>) => {
        this.certificates = res.result;
        this.pagination = res.pagination;
    }, error => {
      this.alertify.error(error);
    });
  }
}
