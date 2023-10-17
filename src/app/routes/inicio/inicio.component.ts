import { Component, Input, OnInit } from '@angular/core';
import { MovieDBService } from 'src/app/services/movieDB/movie-db.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit{
  title: string = 'PelisUp!';

  activeTab: string = 'Todos';
  onTabClick(filtro: string) {
    this.activeTab = filtro;
  };


  trendingMovies: any[] = [];

  constructor(private _movieDB: MovieDBService){
  };

  ngOnInit(){
    this.getTrendingAll();
  }

  getTrendingAll() {
    this._movieDB.getTrending().subscribe({
      next:  (data: any) => {this.trendingMovies = data.results},
      error: (error) => {console.log(error, 'Error')},
      complete: () => {console.log('Completado')},
    });
  }

  

  
}
