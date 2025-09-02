import { Component } from '@angular/core';
import { LivroInterface } from './livro-interface';

@Component({
  selector: 'app-livro',
  imports: [],
  templateUrl: './livro.html',
  styleUrl: './livro.css'
})

export class Livro {
  alternarFavorito() {
    this.livro.favorito = !this.livro.favorito;
  }

  livro: LivroInterface = {
    titulo: "As ondas",
    autoria: "Virginia Woolf",
    genero: "Ficção",
    favorito: false,
    imagem: "https://m.media-amazon.com/images/I/81D2d6LqZdS._UF1000,1000_QL80_.jpg"
  }
}
