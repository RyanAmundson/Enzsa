import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CryptoGuruService } from '../../services/crypto-guru-service';

/**
 * Generated class for the BurstPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-burst',
  templateUrl: 'burst.html',
})
export class BurstPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private CG:CryptoGuruService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BurstPage');
  }

}
