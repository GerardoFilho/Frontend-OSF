import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const enum endpoint {
  movie = 'movie/',
  genres = 'genre/movie/list',
  top_rated = 'movie/top_rated',
  discover = 'discover/movie',
}

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private api_key = '28d99033196827a6b512ba7f4de08b14';
  private Params = `?api_key=${this.api_key}&language=en-US`;
  imgPath: string = '';

  constructor(private http: HttpClient) {
    this.imgPath = 'http://image.tmdb.org/t/p/original';
  }

  getMovies(category: string): Observable<any> {
    return this.http.get(`${environment.base_URL}${endpoint.movie}${category}${this.Params}`);
  }

  getGenres(): Observable<any> {
    return this.http.get(`${environment.base_URL}${endpoint.genres}${this.Params}`)
  }

  getMoviesByGenre(genreID: number): Observable<any> {
    return this.http.get(`${environment.base_URL}${endpoint.discover}${this.Params}&with_genres=${genreID}`)
  }

  getTopMovies(): Observable<any> {
    return this.http.get(`${environment.base_URL}${endpoint.top_rated}${this.Params}&page=1`)
  }
}
