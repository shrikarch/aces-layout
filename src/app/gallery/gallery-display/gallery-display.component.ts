import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';

@Component({
  selector: 'app-gallery-display',
  templateUrl: './gallery-display.component.html',
  styleUrls: ['./gallery-display.component.less']
})
export class GalleryDisplayComponent implements OnInit {
  //ngx gallery config
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  currentlyActivatedRoute;
  constructor(private currentRoute: ActivatedRoute) { }

  ngOnInit() {
    //get the curerntly open sub-section
    this.currentRoute.params.subscribe((params) => {
      this.currentlyActivatedRoute = params.name;
    })

    this.galleryOptions = [
      {
        width: '100%',
        height: '700px',
        thumbnailsColumns: 5,
        imageAnimation: NgxGalleryAnimation.Slide
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '100%',
        imagePercent: 100,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false
      }
    ];

    this.galleryImages = [
      {
        small: 'assets/images/gallery/bulb-low.jpg',
        medium: 'assets/images/gallery/bulb-med.jpg',
        big: 'assets/images/gallery/bulb-med.jpg',
      },
      {
        small: 'assets/images/gallery/comp-low.jpg',
        medium: 'assets/images/gallery/comp-med.jpg',
        big: 'assets/images/gallery/comp-med.jpg',
      },
      {
        small: 'assets/images/gallery/desk-low.jpg',
        medium: 'assets/images/gallery/desk-med.jpg',
        big: 'assets/images/gallery/desk-med.jpg',
      },
      {
        small: 'assets/images/gallery/lens-low.jpg',
        medium: 'assets/images/gallery/lens-med.jpg',
        big: 'assets/images/gallery/lens-med.jpg',
      },
      {
        small: 'assets/images/gallery/plan-low.jpg',
        medium: 'assets/images/gallery/plan-med.jpg',
        big: 'assets/images/gallery/plan-med.jpg',
      }
    ];


  }// onInit ends

}
