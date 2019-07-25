import { Component, OnInit } from '@angular/core';

//enable jquery use
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.less']
})
export class TimelineComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function(){
      $('.timeline').timeline({
        mode: 'horizontal',
        visibleItems: 5
      });
    })
  }

}
