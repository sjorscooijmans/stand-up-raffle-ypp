import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes,
} from '@angular/animations';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { BrowserModule } from '@angular/platform-browser';
// import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  // standalone: true,
  // imports: [BrowserAnimationsModule],
  animations: [
    trigger('rotating', [
      state('begin', style({
      })),
      state('end', style({
        transform: "translateY(100vw)"
      })),
      transition('begin => end', [
        animate('1s', keyframes([
          style({ transform: 'translateY(100vw)' }),
        ]))
      ]),
    ])
  ]
})
export class HomePage {
  start = true

  personen = [
    {name: 'leonard', image: 'assets/personen/Leo.PNG'},
    {name: 'sjors', image: 'assets/personen/sjors.png'},
    {name: 'martijn', image: 'assets/personen/Martijn.PNG'},
  ]
  constructor() { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    console.log('test')
  }
}
