import { MovieService } from './../../../services/movie.service';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {
  imgPath: string = '';
  @Input() idMovie: string = '';
  @Input() imgCard: string = '';

  constructor(private movieService: MovieService, private route: Router) {
    this.imgPath = this.movieService.imgPath;
   }
  
  ngOnInit(): void {
  }

  goTo(){
    this.route.navigate([`/detail-page/${this.idMovie}`])
}

}
