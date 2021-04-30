import { MovieService } from './../../services/movie.service';
import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  topMovie = [];
  subTopMovie: Subscription = new Subscription; 

  constructor(private movieService: MovieService) {
  }

  ngOnInit(): void {
    this.subTopMovie = this.movieService.getTopMovies().subscribe(response => {
      this.topMovie = response.results.slice()
    })

  }

  ngOnDestroy() {
    this.subTopMovie.unsubscribe()
  }

}
