import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDropdownModule, TabsModule, PaginationModule, BsDatepickerModule, ButtonsModule } from 'ngx-bootstrap';
import { RouterModule } from '@angular/router';
import { JwtModule } from '@auth0/angular-jwt';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AuthService } from './_services/auth.service';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ErrorInterceptorProvide } from './_services/error.interceptor';
import { AlertifyService } from './_services/alertify.service';
import { appRoutes } from './routes';
import { ListsComponent } from './lists/lists.component';
import { MessagesComponent } from './messages/messages.component';
import { AuthGuard } from './_guards/auth.guard';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { NotesComponent } from './notes/notes.component';
import { ChannelsComponent } from './channels/channels.component';
import { BrowseComponent } from './browse/browse.component';
import { UserService } from './_services/user.service';
import { MemberListComponent } from './member/member-list/member-list.component';
import { MemberCardComponent } from './member/member-card/member-card.component';
import { MemberDetailComponent } from './member/member-detail/member-detail.component';
import { CourseService } from './_services/course.service';
import { CourseCardComponent } from './course/course-card/course-card.component';
import { CourseDetailComponent } from './course/course-detail/course-detail.component';
import { CourseListComponent } from './course/course-list/course-list.component';
import { AmpPlayerComponent } from './azure/amp-player/amp-player.component';
import { MemberDetailResolver } from './_resolvers/member-detail.resolver';
import { CourseDetailResolver } from './_resolvers/course-detail.resolver';
import { MemberEditComponent } from './member/member-edit/member-edit.component';
import { MemberEditResolver } from './_resolvers/member-edit.resolver';
import { CertificatesListComponent } from './certificates/certificates-list/certificates-list.component';
import { CertificatesService } from './_services/certificates.service';
import { CertificatesListResolver } from './_resolvers/certificates-list.resolver';




export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    RegisterComponent,
    HomeComponent,
    MemberListComponent,
    ListsComponent,
    MessagesComponent,
    CourseCardComponent,
    CourseDetailComponent,
    CourseListComponent,
    BookmarksComponent,
    NotesComponent,
    ChannelsComponent,
    BrowseComponent,
    MemberListComponent,
    MemberCardComponent,
    MemberEditComponent,
    MemberDetailComponent,
    AmpPlayerComponent,
    CertificatesListComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    PaginationModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    BsDropdownModule.forRoot(),
    // BsDatepickerModule.forRoot(),
    ButtonsModule.forRoot(),
    PaginationModule.forRoot(),
    TabsModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    TabsModule.forRoot(),
    JwtModule.forRoot({
      config: {
        tokenGetter,
        whitelistedDomains: ['localhost:5000'],
        blacklistedRoutes: ['localhost:5000/api/auth'],
      }
    })
  ],
  providers: [
    AuthService,
    ErrorInterceptorProvide,
    AlertifyService,
    AuthGuard,
    UserService,
    CourseService,
    CertificatesService,
    MemberDetailResolver,
    MemberEditResolver,
    CourseDetailResolver,
    CertificatesListResolver
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
