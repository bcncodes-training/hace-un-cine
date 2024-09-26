import { Component, OnInit } from '@angular/core';
import { CinemaService } from '../Services/cinema.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-my-movie',
  templateUrl: './my-movie.component.html',
  styleUrls: ['./my-movie.component.scss'],
  providers: [CinemaService]
})
export class MyMovieComponent implements OnInit {

  public identificador: number;
  public salaSeleccionada: any;

  constructor(public ServicioSalas: CinemaService, public sala: ActivatedRoute) {}

  ngOnInit() {
    this.identificador = this.sala.snapshot.params.id;
    this.salaSeleccionada = this.ServicioSalas.getMovie(this.identificador);
    if (this.salaSeleccionada === undefined) {
      this.identificador = 0 ;
    }
  }
}
