import { Component, Input } from '@angular/core';
import { MovieDBService } from 'src/app/services/movieDB/movie-db.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent {
  title: string = 'Series';
  activeTab: string = 'Series';

  constructor(private _movieDB: MovieDBService){
  };

  @Input() series: any;
  ngOnInit(){
    this.getSeriesAll();
  }

  getSeriesAll() {
    this._movieDB.getSeries().subscribe({
      next:  (data: any) => {this.series = data.results},
      error: (error) => {console.log(error, 'Error')},
      complete: () => {console.log('Completado')},
    });
  }


}
