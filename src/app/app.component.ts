import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'bytebank-angular';
  destino: number = 0;
  valor: number = 0;

  transferir($event: any) {
    console.log($event);
    this.destino = $event.destino;
    this.valor = $event.valor;
  }
}
