import { Component, Input } from '@angular/core';
import { MovieDBService } from 'src/app/services/movieDB/movie-db.service';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() movie: any = [];


}
