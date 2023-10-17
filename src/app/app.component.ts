import { Component } from '@angular/core';
import { MovieDBService } from './services/movieDB/movie-db.service';

@Component({
  selector: 'app-app',
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  trendingmovies: any[] = [];

  constructor(private _movieDB: MovieDBService) {

  }

  ngonInit(): void {
          this._movieDB.getTrending().subscribe({
          next:  (data: any) => {this.trendingmovies = data.results},
          error: (error) => {console.log(error, 'Error')},
          complete: () => {console.log('Completado')},
      });
  }

  

}
