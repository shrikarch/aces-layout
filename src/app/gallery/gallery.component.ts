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
        "name" : "NodeJsCodingBookcamp",
        "date" : "August 05 2019"
      },
      {
        "name" : "MatlabBootcamp",
        "date" : "August 01 2019"
      },
      {
        "name" : "ACEMeetandGreet",
        "date" : "July 06 2019"
      },
      {
        "name" : "BadmintonSummerCamp",
        "date" : "April 05 2019"
      },
      {
        "name" : "NodeJscodingbookcamp",
        "date" : "May 25 2019"
      },
      {
        "name" : "DotNetBootcamp",
        "date" : "January 25 2019"
      },
      {
        "name" : "NodeJsCodingBookcamp",
        "date" : "August 05 2019"
      },
      {
        "name" : "NodeJsCodingBookcamp",
        "date" : "August 05 2019"
      }
    ]
  }

}
