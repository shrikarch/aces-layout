import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { NgxGalleryModule } from 'ngx-gallery';

import { EventsService } from './services/events.service';

import { AppRoutingModule } from './app-routing.module';
import { ParticlesModule } from 'angular-particle';

import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { FooterComponent } from './footer/footer.component';
import { EventsComponent } from './events/events.component';
import { TimelineComponent } from './timeline/timeline.component';
import { TeamComponent } from './team/team.component';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { GalleryDisplayComponent } from './gallery/gallery-display/gallery-display.component';
import { FeedbackFormComponent } from './forms/feedback-form/feedback-form.component';
import { Forms2Component } from './forms2/forms2.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    FooterComponent,
    EventsComponent,
    TimelineComponent,
    TeamComponent,
    HomeComponent,
    GalleryComponent,
    GalleryDisplayComponent,
    FeedbackFormComponent,
    Forms2Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxGalleryModule,
    AppRoutingModule,
    ParticlesModule
  ],
  providers: [
    EventsService,
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
