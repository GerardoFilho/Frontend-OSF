import { MovieService } from './../../../services/movie.service';
import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  genres: Array<any> = []
  subGenres!: Subscription;

  moviesListGenre: Array<any> = []
  subMoviesListGenre!: Subscription

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    // ---- | CREATE ARRAY OF GENRES | ---0
    this.subGenres = this.movieService.getGenresMovies().subscribe(response => {
      this.genres = response.genres
      for(let i = 0; i < this.genres.length; i++){
        this.separeByGenre(this.genres[i].id)
      }
    })
  }

  separeByGenre(id: number){
    this.subMoviesListGenre = this.movieService.getMoviesByGenre(id).subscribe(response => {
      this.moviesListGenre.push(response.results.slice());
    })
  }

  ngOnDestroy() {
    this.subGenres.unsubscribe()
    this.subMoviesListGenre.unsubscribe()
  }

}

