import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsComponent } from './events/events.component';
import { TimelineComponent } from './timeline/timeline.component';
import { TeamComponent } from './team/team.component';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { GalleryDisplayComponent } from './gallery/gallery-display/gallery-display.component';
import { FeedbackFormComponent } from './forms/feedback-form/feedback-form.component';
import { Forms2Component } from './forms2/forms2.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'team', component: TeamComponent },
  { path: 'forms2', component: Forms2Component },
  {
    path: 'gallery',
    component: GalleryComponent
    // children: [
    //   {
    //   path: ':eventName',
    //   component: GalleryDisplayComponent
    // }]
  },
  { path: 'gallery/:name', component: GalleryDisplayComponent },
  { path: 'events', component: EventsComponent },
  { path: 'timeline', component: TimelineComponent },
  { path: 'forms/feedback', component: FeedbackFormComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'pages/page-404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
