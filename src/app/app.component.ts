import { Component } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'rahul-aces-ng';
  posts;
  constructor(public http: HttpClient) {
  }

  ngOnInit(){
    const sampleUrl = 'http://slowwly.robertomurray.co.uk/delay/6000/url/https://jsonplaceholder.typicode.com/posts/1';

  
  }
}
