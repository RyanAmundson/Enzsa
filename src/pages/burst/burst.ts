import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CryptoGuruService } from '../../services/crypto-guru-service';
import { LoadingController } from 'ionic-angular';

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

  bestDeadlineInfo;
  currentShares;
  block;

  constructor(public navCtrl: NavController, public navParams: NavParams, private CG:CryptoGuruService) {
        CG.connect().subscribe((evt)=>{   
          let data = JSON.parse(evt.data);
          console.log(data);
          if(data.currentShares){
            this.currentShares = data.currentShares;
          }   
          if(data.bestDeadlineInfo){
              this.bestDeadlineInfo = data.bestDeadlineInfo;
          }
          if(data.block){
            this.block = data.block;
          }
    });
  }

  elapsedTime(creationTime?){
    if(this.block){
      console.log(Date.now() - new Date(this.block.created).getUTCMilliseconds());
    }
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BurstPage');
  }

}
