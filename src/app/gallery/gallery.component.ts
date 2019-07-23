import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.less']
})
export class GalleryComponent implements OnInit {
  events = []

  constructor() { }

  ngOnInit() {
    this.events = [
      {
        "name" : "NodeJs coding bookcamp",
        "date" : "August 05 2019"
      },
      {
        "name" : "Matlab Bootcamp",
        "date" : "August 01 2019"
      },
      {
        "name" : "ACE Meet and Greet",
        "date" : "July 06 2019"
      },
      {
        "name" : "Badminton Summer Camp",
        "date" : "April 05 2019"
      },
      {
        "name" : "NodeJs coding bookcamp",
        "date" : "May 25 2019"
      },
      {
        "name" : "DotNet Bootcamp",
        "date" : "January 25 2019"
      },
      {
        "name" : "NodeJs coding bookcamp",
        "date" : "August 05 2019"
      },
      {
        "name" : "NodeJs coding bookcamp",
        "date" : "August 05 2019"
      }
    ]
  }

}
