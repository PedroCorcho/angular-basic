import {Component} from '@angular/core'

@Component ({
    selector: 'app-contador',
    template: `

        <h1>{{ titulo }}</h1>

        <h3>La base es: <strong> {{ base }} </strong> </h3>

        <button (click)="acumular(base)" > + {{ base }}</button>

        <span> {{ numero }} </span>

        <button (click)="acumular(-base)" > - {{ base }} </button>



    `
})

export class ContadorComponent {  // Tengo que exportarlo en el app.component.HTML como <app-contador></app-contador> y en el modulo
                                // tambien tengo que exportarlo como el nombre de la clase en este caso: ContadorComponente
    titulo: string = 'Contador App';
  numero: number = 10;
  base  : number = 5;

  // sumar() {
  //   this.numero += 1;
  // }

  // restar() {
  //   this.numero -= 1;
  // }

acumular(valor: number) {
  this.numero += valor
}


}