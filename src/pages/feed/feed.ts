import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {
  public objeto_feed={
    titulo:"Michel Câmara-JSON Code",
    data:"Juny 2, 2018",
    descricao:"Aprendendo Ionic 3! Estou gostando muito!",
    qntd_likes:12,
    qntd_comments:4,
    time_comment:"11h ago"
  }
  public nome_usuario:String="Michel Câmara - code"  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedPage');
  }

}
