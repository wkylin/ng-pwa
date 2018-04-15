import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  offline = '';

  ngOnInit() {
    if (!navigator.onLine) {
      this.offline = 'Sorry, you\'re offline';
    }
  }

}
