import { Component, input } from '@angular/core';
import { LivroComponent } from '../livro/livro';
import { livros } from '../../mock-livros';
import { GeneroLiterario } from '../livro/livro-interface';

@Component({
  selector: 'app-genero-literario',
  imports: [
    LivroComponent
  ],
  templateUrl: './genero-literario.html',
  styleUrl: './genero-literario.css'
})

export class GeneroLiterarioComponent {
  genero = input.required<GeneroLiterario>();
  livro = livros[0]
}
