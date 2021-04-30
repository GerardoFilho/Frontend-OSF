import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss']
})
export class DetailPageComponent implements OnInit {
  movie: any;
  subMovie!: Subscription;
  
  movieId: any;
  subMovieId!: Subscription;

  constructor(private movieService: MovieService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    console.log(this.movieId, "1")
    this.subMovieId = this.route.params.subscribe(routeParams => {
      this.movieId = routeParams.id
      console.log(this.movieId, "2")

      this.subMovie = this.movieService.getMovies(this.movieId).subscribe(response => {
        this.movie = response
        console.log(this.movieId, "3")
        console.log(this.movie, "4")

      })
    });
  }

  ngOnDestroy() {
    this.subMovie.unsubscribe();
    this.subMovieId.unsubscribe();

  }

}
