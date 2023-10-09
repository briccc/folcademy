import { Component } from '@angular/core';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent {
  
  series: any[] = [

    {
      id: 9,
      title: 'Anne with an E',
      description: 'Anne with an E es una serie de drama y aventuras.',
      image: 'assets/images/annewithane.jpg',
      rating: "4.2",
      category: 'serie',
    },
    {
      id: 10,
      title: 'Dark',
      description: 'Dark es una serie de ciencia ficción y misterio.',
      image: 'assets/images/dark.jpeg',
      rating: "4.5",
      category: 'serie',
    },
    {
      id: 11,
      title: 'Gossip Girl',
      description: 'Gossip Girl es una serie de drama y romance.',
      image: 'assets/images/gossipgirl.jpg',
      rating: "3.8",
      category: 'serie',
    },
    {
      id: 12,
      title: 'Narcos',
      description: 'Es una serie de drama basada en hechos reales.',
      image: 'assets/images/narcos.jpg',
      rating: "4.0",
      category: 'serie',
    },
    {
      id: 13,
      title: 'One Piece',
      description: 'One Piece es una serie de aventuras y acción.',
      image: 'assets/images/onepiece.jpg',
      rating: "4.3",
      category: 'serie',
    },
    {
      id: 14,
      title: 'Pretty Little Liars',
      description: 'Es una serie de misterio y drama adolescente.',
      image: 'assets/images/pll.jpg',
      rating: "3.9",
      category: 'serie',
    },
    {
      id: 15,
      title: 'The 100',
      description: 'The 100 es una serie de ciencia ficción y supervivencia.',
      image: 'assets/images/the100.jpg',
      rating: "4.1",
      category: 'serie',
    },
    {
      id: 16,
      title: 'The Witcher',
      description: 'Es una serie de fantasía basada en serie de libros',
      image: 'assets/images/thewitcher.jpg',
      rating: "4.4",
      category: 'serie',
    }
  ];
}
