import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  constructor(){
    // Init Firebase
    const config = {
      apiKey: "AIzaSyAGxds_mxRKsOTE1fv-vFlMZkCNQqvoXn8",
      authDomain: "post-765f5.firebaseapp.com",
      databaseURL: "https://post-765f5.firebaseio.com",
      projectId: "post-765f5",
      storageBucket: "post-765f5.appspot.com",
      messagingSenderId: "466116157260"
    };
    firebase.initializeApp(config);
  }
}
