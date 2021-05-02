import { FirebaseService } from './../../services/firebase.service';
import { MovieService } from './../../services/movie.service';
import { Subscription } from 'rxjs';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @Output() isLogout = new EventEmitter<void>()
  topMovie = [];
  subTopMovie: Subscription = new Subscription; 

  constructor(private movieService: MovieService, public firebaseService : FirebaseService) {
  }

  ngOnInit(): void {
    this.subTopMovie = this.movieService.getTopMovies().subscribe(response => {
      this.topMovie = response.results.slice()
    })

  }
  logout(){
    this.firebaseService.logout()
    this.isLogout.emit()
  }

  ngOnDestroy() {
    this.subTopMovie.unsubscribe()
  }

}
