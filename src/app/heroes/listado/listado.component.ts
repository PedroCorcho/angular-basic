import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Ironman', 'Thor', 'Hulk', 'Captain America'];
  heroeBorrado: string = '';
  // heroeDeletedList:  string[] = [];

  borrandoHeroe():void {
    this.heroeBorrado = this.heroes.shift() || '';
    
    
  
    console.log('...Borrando Heroe');
    // const heroeDeleted = this.heroes.shift() || '';
    // this.heroeDeletedList.push(heroeDeleted)
    // this.heroes = [];
  }

}
