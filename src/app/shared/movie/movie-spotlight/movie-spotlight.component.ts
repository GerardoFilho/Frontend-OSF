import { MovieService } from './../../../services/movie.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-spotlight',
  templateUrl: './movie-spotlight.component.html',
  styleUrls: ['./movie-spotlight.component.scss']
})
export class MovieSpotlightComponent implements OnInit {

  @Input() movieTop: any;
  imgPath:string

  constructor(private movieService: MovieService) {
    this.imgPath = this.movieService.imgPath;
  }
  
  ngOnInit(): void {
  }

 
}
