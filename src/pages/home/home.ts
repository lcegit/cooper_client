import { PerfomanceDataProvider } from '../../providers/perfomance-data/perfomance-data';
import { PersonProvider } from '../../providers/person/person';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController, NavParams } from 'ionic-angular';
import { ResultsPage } from '../results/results';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  user: any = {};

  constructor(public navCtrl: NavController, public person: PersonProvider, public modalCtrl: ModalController) {
    this.user = { distance: 1000, age: 20, gender: 'female' };
  }

    calculate(user) {
    this.person.doAssessment(user.distance);
    this.perfomanceData
      .saveData({ performance_data: { data: { message: this.person.assessmentMessage } } })
      .subscribe(data => console.log(data));
  }

    showResults() {
    this.modalCtrl.create(ResultsPage).present();
  }

}
