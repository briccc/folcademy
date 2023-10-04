import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  activeTab : string = 'Todos';
  onTabClick(filtro: string) {
    this.activeTab = filtro;
  }
}
