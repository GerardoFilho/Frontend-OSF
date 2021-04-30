import { MovieService } from './../../../services/movie.service';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-spotlight',
  templateUrl: './movie-spotlight.component.html',
  styleUrls: ['./movie-spotlight.component.scss']
})
export class MovieSpotlightComponent implements OnInit {

  @Input() movieSpotlight: any;
  @Input() idMovie: string = '';
  imgPath:string

  constructor(private movieService: MovieService, private route: Router) {
    this.imgPath = this.movieService.imgPath;
  }
  
  ngOnInit(): void {
  }
 
}
