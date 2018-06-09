import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MooviesProvider } from '../../providers/moovies/moovies';

/**
 * Generated class for the FilmeDetalhesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-filme-detalhes',
  templateUrl: 'filme-detalhes.html',
  providers: [MooviesProvider]
})
export class FilmeDetalhesPage {
  public filme;
  public filmeId;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public movieProvider: MooviesProvider) {
  }

  ionViewDidEnter() {
    this.filmeId = this.navParams.get("id");
    this.movieProvider.getMovieDetails(this.filmeId).subscribe(
      data=>{
       /* const retorno = (data as any);
        this.filme = retorno.results;
        console.log(retorno);*/
        const retorno = (data as any);
        this.filme = retorno;
        console.log(retorno);
        //let retorno = (data as any )._body;
        //this.filme = JSON.parse(retorno)
      }, error =>{
          console.log(error);
        }
    )
  }

}
