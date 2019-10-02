import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms2',
  templateUrl: './forms2.component.html',
  styleUrls: ['./forms2.component.less']
})
export class Forms2Component implements OnInit {
  width: number = 100;
  height: number = 100;
  style;
  params;


  constructor() {
    alert("forms 2 loaded")
  }

  ngOnInit() {
    alert("forms 2 loaded")
    this.style = {
      'position': 'fixed',
      'width': '100%',
      'height': '100%',
      'z-index': -1,
      'top': 0,
      'left': 0,
      'right': 0,
      'bottom': 0,
    };;

    this.params = {
      particles: {
        number: {
          value: 200,
        },
        color: {
          value: '#ff0000'
        },
        shape: {
          type: 'triangle',
        },
      }
    };


  }

}
