import { Component, signal } from '@angular/core';
import { CabecalhoComponent } from "./componentes/cabecalho/cabecalho";
import { RodapeComponent } from "./componentes/rodape/rodape";
import { ListaLivrosComponent } from './componentes/lista-livros/lista-livros';
import { GeneroLiterarioComponent } from './componentes/genero-literario/genero-literario';

@Component({
  selector: 'app-root',
  imports: [
    CabecalhoComponent,
    RodapeComponent,
    ListaLivrosComponent,
    GeneroLiterarioComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('organo');
}
