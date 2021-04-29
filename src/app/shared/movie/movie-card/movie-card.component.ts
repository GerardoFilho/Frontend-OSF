import { MovieService } from './../../../services/movie.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {
  imgPath: string = '';
  @Input() idMovie: string = '';
  @Input() imgCard: string = '';

  constructor(private movieService: MovieService) {
    this.imgPath = this.movieService.imgPath;
   }
  
  ngOnInit(): void {
  }

}
