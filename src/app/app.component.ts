import { Component } from '@angular/core';
import { User } from './_models/user';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  currentUser: User = JSON.parse(localStorage.getItem('currentUser'));

  constructor() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));

  }
}

