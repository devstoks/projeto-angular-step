import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponenteTeste } from './componente-teste/componente-teste';
@Component({
  imports: [RouterOutlet, ComponenteTeste],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  public exemplo = "Texto";

  isAdmin = true;

   mudarTexto(){
    //alert("Funcao acionada");
    this.exemplo = "Texto alterado";
  }
}
