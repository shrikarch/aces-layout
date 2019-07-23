import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-gallery-display',
  templateUrl: './gallery-display.component.html',
  styleUrls: ['./gallery-display.component.less']
})
export class GalleryDisplayComponent implements OnInit {
  currentlyActivatedRoute;
  constructor(private currentRoute: ActivatedRoute) { }

  ngOnInit() {
    this.currentRoute.params.subscribe((params) => {
      this.currentlyActivatedRoute = params.name;
    })
  }

}
