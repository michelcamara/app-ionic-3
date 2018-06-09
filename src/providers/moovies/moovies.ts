import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MooviesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MooviesProvider {
  private apiBasePath= "https://api.themoviedb.org/3";
  constructor(public http: HttpClient) {
    console.log('Hello MooviesProvider Provider');
  }

  getLastestMovies(page = 1){
    return this.http.get(this.apiBasePath + '/movie/popular?page='+page+'&api_key=' + this.getApiKey());
  }
  getMovieDetails(filmeId){
    return this.http.get(this.apiBasePath + '/movie/'+filmeId+'?api_key=' + this.getApiKey());
  }
  getApiKey(): string{
    return "d9fd1d52587a05e9d4dcb4bf981d0471"
  }
}
