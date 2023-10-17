import { Component, Input } from '@angular/core';
import { MovieDBService } from 'src/app/services/movieDB/movie-db.service';

@Component({
  selector: 'app-pelis',
  templateUrl: './pelis.component.html',
  styleUrls: ['./pelis.component.css']
})
export class PelisComponent {
  

  title: string = 'Películas';

  
  constructor(private _movieDB: MovieDBService){
  };

  @Input() movies: any;
  ngOnInit(){
    this.getMoviesAll();
  }

  getMoviesAll() {
    this._movieDB.getMovies().subscribe({
      next:  (data: any) => {this.movies = data.results},
      error: (error) => {console.log(error, 'Error')},
      complete: () => {console.log('Completado')},
    });
  }
  
  


}
