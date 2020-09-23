import { CertificatesListComponent } from './certificates/certificates-list/certificates-list.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './_guards/auth.guard';
import { BrowseComponent } from './browse/browse.component';
import { ChannelsComponent } from './channels/channels.component';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { NotesComponent } from './notes/notes.component';
import { MemberListComponent } from './member/member-list/member-list.component';
import { MemberDetailComponent } from './member/member-detail/member-detail.component';
import { CourseListComponent } from './course/course-list/course-list.component';
import { CourseDetailComponent } from './course/course-detail/course-detail.component';
import { MemberDetailResolver } from './_resolvers/member-detail.resolver';
import { CourseDetailResolver } from './_resolvers/course-detail.resolver';
import { MemberEditComponent } from './member/member-edit/member-edit.component';
import { MemberEditResolver } from './_resolvers/member-edit.resolver';

import { Routes } from '@angular/router';
import { CertificatesListResolver } from './_resolvers/certificates-list.resolver';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      {
        path: 'home', component: HomeComponent
      },

      { path: 'members', component: MemberListComponent },
      { path: 'members/:id', component: MemberDetailComponent, resolve: { user: MemberDetailResolver } },
      { path: 'member/edit', component: MemberEditComponent, resolve: { user: MemberEditResolver } },
      // { path: 'lists', component: ListsComponent },
      // { path: 'messages', component: MessagesComponent },
      { path: 'courses', component: CourseListComponent },
      { path: 'courses/:id', component: CourseDetailComponent, resolve: { course: CourseDetailResolver } },

      { path: 'browse', component: BrowseComponent },
      { path: 'channels', component: ChannelsComponent },
      { path: 'bookmarks', component: BookmarksComponent },
      { path: 'notes', component: NotesComponent },
    ]
  },
  {
    path: '',
    children: [{
      path: 'certificates', component: CertificatesListComponent,
      resolve: { certificates: CertificatesListResolver }

    }]
  },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];
