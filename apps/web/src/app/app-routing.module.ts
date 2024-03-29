import { Routes } from '@angular/router';
import {
  BlogComponent,
  CodeOfConductComponent,
  DetailsComponent,
  HomeComponent,
  SpeakersComponent,
  SponsorsComponent,
  WorkshopsComponent,
  SessionsComponent
} from './pages/pages';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'CodeOfConduct', component: CodeOfConductComponent },
  { path: 'Speakers', component: SpeakersComponent },
  { path: 'Sponsors', component: SponsorsComponent },
  { path: 'Sessions', component: SessionsComponent },
  { path: 'Workshops', component: WorkshopsComponent },
  { path: 'Details', component: DetailsComponent },
  { path: 'Blog', component: BlogComponent }
];
