import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
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

  constructor(private movieService: MovieService, private route: ActivatedRoute, private changeDetector: ChangeDetectorRef) {

  }

  ngOnInit(): void {
    console.log("Oii")
    this.subMovieId = this.route.params.subscribe(routeParams => {
      this.movieId = routeParams.id;

      console.log(this.movieId)
      this.subMovie = this.movieService.getMovies(this.movieId).subscribe(response => {
        this.movie = response

      })
    });
  }

  ngOnDestroy() {
    this.subMovie.unsubscribe();
    this.subMovieId.unsubscribe();

  }

  // Problema com a atualização da pagina detecta alguma mudança na pagina. quando clicava ele nao mudava nada, como se nao tivesse nada no filme
  ngAfterViewChecked() {
    this.changeDetector.detectChanges()
  }

}
