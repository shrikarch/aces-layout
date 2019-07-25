import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { NgxGalleryModule } from 'ngx-gallery';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { FooterComponent } from './footer/footer.component';
import { EventsComponent } from './events/events.component';
import { TimelineComponent } from './timeline/timeline.component';
import { TeamComponent } from './team/team.component';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { GalleryDisplayComponent } from './gallery/gallery-display/gallery-display.component';

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
    GalleryDisplayComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxGalleryModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
