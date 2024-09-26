import { Component, OnInit } from '@angular/core';
import { CinemaService } from '../Services/cinema.service';
import { Movie } from '../shared/interfaces/movie';

@Component({
  selector: 'app-my-home',
  templateUrl: './my-home.component.html',
  styleUrls: ['./my-home.component.scss'],
  providers: [CinemaService]
})
export class MyHomeComponent implements OnInit {
  public salas: Movie[];

  constructor(public ServicioSalas: CinemaService) {
    this.salas = ServicioSalas.getMovies();
  }

  ngOnInit() {
  }

}
