import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes,
  sequence,
} from '@angular/animations';


@Component({
  selector: 'app-home',
  templateUrl: 'test.page.html',
  styleUrls: ['test.page.scss'],
  animations: [
    trigger('flyInOut', [
      state('in', style({ transform: 'translateX(0)'})),
      transition(':enter', [
        style({
          transform: 'translateY(-3%)',
          opacity: 0,
          position: 'static'
        }),
        sequence([
          animate(
            '3.5s ease-in-out',
            keyframes([
              style({ transform: 'translateY(50%)', opacity: 0 }),
              style({ transform: 'translateY(0%)', opacity: 1 }),
            ])
          ),
          animate('2.5s .2s ease-in', keyframes([
            style({ opacity: .0, offset: .2 }),
            style({ opacity: .2, offset: .6 }),
            style({ opacity: .4, offset: .8 }),
            style({ opacity: .99, offset: 1 })
          ]))
        ])
      ])
    ])
  ]
})

export class TestPage {
  // heroesTotal = -1;

  // get heroes() { return this._heroes; }
  // private _heroes: Hero[] = [];

  // ngOnInit() {
  //   this._heroes = HEROES;
  // }

  // updateCriteria(criteria: string) {
  //   criteria = criteria ? criteria.trim() : '';

  //   this._heroes = HEROES.filter(hero => hero.name.toLowerCase().includes(criteria.toLowerCase()));
  //   const newTotal = this.heroes.length;

  //   if (this.heroesTotal !== newTotal) {
  //     this.heroesTotal = newTotal;
  //   } else if (!criteria) {
  //     this.heroesTotal = -1;
  //   }
  // }
}
