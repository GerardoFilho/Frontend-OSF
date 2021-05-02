import { MovieListComponent } from './../shared/movie/movie-list/movie-list.component';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lazy',
  pure: true
})
export class LazyPipe implements PipeTransform {

  transform(movielist: MovieListComponent, page: number): unknown {
    return movielist.genres;
  }

}
