import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  
  activeTab: string = 'Todos';
  onTabClick(filtro: string) {
    this.activeTab = filtro;
  };

    movies_series: any[] = [

      {
        id: 1,
        title: 'Cisne Negro',
        description: 'Cisne Negro es una película de drama y arte',
        image: 'assets/images/cisnenegro.jpg',
        rating: "3.5",
        category: 'pelicula',
      },
      {
        id: 2,
        title: 'Minions',
        description: 'Minions es para disfrutar en familia',
        image: 'assets/images/minions.jpeg',
        rating: "5.0",
        category: 'pelicula',
      },
      {
        id: 3,
        title: 'Ratatouille',
        description: 'Ratatouille es una película para toda la familia',
        image: 'assets/images/ratatouille.jpg',
        rating: "4.9",
        category: 'pelicula',
      },
      {
        id: 4,
        title: 'Joker',
        description: 'Joker es una película de drama y crimen',
        image: 'assets/images/joker.jpeg',
        rating:"3.8",
        category: 'pelicula',
      },
      {
        id: 5,
        title: 'Oppenheimer',
        description: 'Oppenheimer es una película de suspense y drama.',
        image: 'assets/images/oppenheimer.jpg',
        rating: "4.0",
        category: 'pelicula',
      },
      {
        id: 6,
        title: 'Sonríe',
        description: 'Sonríe es una película de comedia.',
        image: 'assets/images/sonrie.jpg',
        rating: "3.5",
        category: 'pelicula',
      },
      {
        id: 7,
        title: 'La monja',
        description: 'La monja es una película de terror.',
        image: 'assets/images/lamonja.jpg',
        rating: "3.7",
        category: 'pelicula',
      },
      {
        id: 8,
        title: 'Megalodón 2',
        description: 'Megalodón 2 es una película de ciencia ficción y acción.',
        image: 'assets/images/megalodon2.jpg',
        rating: "3.9",
        category: 'pelicula',
      },
              
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

