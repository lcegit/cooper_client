import { PerformanceDataProvider } from '../../providers/performance-data/performance-data';
import { PersonProvider } from '../../providers/person/person';
import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { ResultsPage } from '../results/results';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  user: any = {};

  constructor(public navCtrl: NavController,
    public person: PersonProvider,
    public performanceData: PerformanceDataProvider,
    public modalCtrl: ModalController)
    {

    this.user = { distance: 1000, age: 20, gender: 'female' };
  }

    calculate() {
    this.person.age = this.user.age;
    this.person.gender = this.user.gender;

    this.person.doAssessment(this.user.distance);
  }

    saveData() {
    this.person.doAssessment(this.user.distance);
    this.performanceData
      .saveData({ performance_data: { data: { message: this.person.assessmentMessage } } })
      .subscribe(data => console.log(data));
  }

    showResults() {
    this.modalCtrl.create(ResultsPage).present();
  }

}
