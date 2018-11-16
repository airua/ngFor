import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  title = 'Listado de héroes';

  heroes = ['Elektra', 'Daredevil', 'Luke Cage', 'Jessica Jones'];

  myHero = this.heroes[1];

}
