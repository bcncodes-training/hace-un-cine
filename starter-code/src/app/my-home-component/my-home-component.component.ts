import { Component, OnInit } from '@angular/core';
import { Movie, movies } from '../movies-list';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-my-home-component',
  templateUrl: './my-home-component.component.html',
  styleUrls: ['./my-home-component.component.scss']
})
export class MyHomeComponentComponent implements OnInit {
  movies: Array<Movie> = movies;

  constructor(public movieService: MoviesService) { }

  ngOnInit() {
    this.movies = this.movieService.getMovies();
  }
}
