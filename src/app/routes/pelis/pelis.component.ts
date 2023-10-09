import { Component } from '@angular/core';

@Component({
  selector: 'app-pelis',
  templateUrl: './pelis.component.html',
  styleUrls: ['./pelis.component.css']
})
export class PelisComponent {
  title: string = 'Películas';

  movies: any[] = [

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
  ];

  originalMovies: any[] = [...this.movies];

  busqueda: string = '';

  buscar() {
    console.log('Búsqueda realizada:', this.busqueda);

    if (this.busqueda.trim() === '') {
      // Si no se ha ingresado ningún término de búsqueda, restaura la lista completa
      this.movies = [...this.originalMovies];
      return;
    }

    // Filtrar la lista de películas y series según el término de búsqueda
    this.movies = this.originalMovies.filter(item => {
      const busquedaMin = this.busqueda.toLowerCase();
      const tituloMin = item.title.toLowerCase();
      return tituloMin.includes(busquedaMin);
    });
  }
}
