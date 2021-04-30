import { MovieService } from './../../../services/movie.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  @Input() movie: any;
  imagePath: any;

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {

    this.imagePath = this.movieService.imgPath;

  }

}
