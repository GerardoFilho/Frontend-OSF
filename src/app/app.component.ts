import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MovieService } from './services/movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'Mulan';
  sticky = false;

  sliderConfig = {
    slidesToShow: 9,
    slidesToScroll: 2,
    arrows: 2,
    autoplay: false
  };

  @ViewChild('stickHeader') header: ElementRef | undefined;

  constructor(private movieService: MovieService) {

  }

  ngOnInit(): void{
    // this.movieService.getMovies('12').then(response => {
    //   console.log(response, "resposta do server");
    // });

    // this.movieService.getGenres().then(response => {
    //   console.log(response, "todos os generos");
    // })


  }

  ngOnDestroy(): void{
    //this.subs.map(s=> s.unsubscribe());
  }

}
