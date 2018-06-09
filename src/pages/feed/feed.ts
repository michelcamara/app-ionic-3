import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { MooviesProvider } from '../../providers/moovies/moovies';
import { FilmeDetalhesPage } from '../filme-detalhes/filme-detalhes';

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
  providers: [
    MooviesProvider
  ]
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
  
  public lista_filmes = new Array<any>();
  public page=1;

  public nome_usuario:String="Michel Câmara - code"  
  public loader;
  public refresher;
  public isRefreshing: boolean = false;
  public infiniteScroll;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private movieProvider: MooviesProvider,
    public loadingCtrl: LoadingController) {
  }

  abrirDetalhes(filme){
    console.log(filme);
    this.navCtrl.push(FilmeDetalhesPage, {id: filme.id});
  }
  
  abreCarregando() {
    this.loader = this.loadingCtrl.create({
      content: "Carregando...",
      //duration: 3000
    });
    this.loader.present();
  }

  fechaCarregando(){
    this.loader.dismiss();
  }

  doRefresh(refresher) {
    this.refresher = refresher;
    this.isRefreshing = true;
    this.carregarFilmes();
  }

  ionViewDidEnter() {
    this.carregarFilmes();
  }

  doInfinite(infiniteScroll) {
    /*setTimeout(() => {
      for (let i = 0; i < 30; i++) {
        this.items.push( this.items.length );
      }
      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 500);*/
    this.page++;
    this.infiniteScroll=infiniteScroll;
    this.carregarFilmes(true);
    //infiniteScroll.complete();
  }

  carregarFilmes(newPage: boolean = false){
    this.abreCarregando();
    this.movieProvider.getLastestMovies(this.page).subscribe(
      data=>{
        const obj_retorno = (data as any);
        if (newPage){
          this.lista_filmes = this.lista_filmes.concat(obj_retorno.results);
          this.infiniteScroll.complete();
        }else{
          this.lista_filmes = obj_retorno.results;
        }
        this.fechaCarregando();
        if(this.isRefreshing){
          this.refresher.complete();
          this.isRefreshing = false;
        }
      }, error=>{
        console.log(error);
        this.fechaCarregando();
        if(this.isRefreshing){
          this.refresher.complete();
          this.isRefreshing = false;
        }
      }
    )
  }
}
