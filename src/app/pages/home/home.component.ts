import { MovieService } from './../../services/movie.service';
import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  topMovies = [];
  subTopMovies: Subscription = new Subscription;

  

  constructor(private movieService: MovieService) {

  }

  ngOnInit(): void {

    this.subTopMovies = this.movieService.getTopMovies().subscribe(response => {
      this.topMovies = response.results.slice()
      console.log(this.topMovies[0])
    })
  }

  ngOnDestroy() {
    this.subTopMovies.unsubscribe()
  }

}
