import { Component, OnInit } from '@angular/core';
import { EventsService } from '../services/events.service';

//enable jquery use
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.less']
})
export class TimelineComponent implements OnInit {
  events;
  constructor(private eventsService:EventsService) { }

  ngOnInit() {
    this.events = this.eventsService.events;

    $(document).ready(function(){
      $('.timeline').timeline({
        mode: 'horizontal',
        visibleItems: 7
      });
    })
  }

}
