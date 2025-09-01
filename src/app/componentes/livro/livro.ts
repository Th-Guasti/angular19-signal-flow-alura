import { Component } from '@angular/core';

@Component({
  selector: 'app-livro',
  imports: [],
  templateUrl: './livro.html',
  styleUrl: './livro.css'
})
export class Livro {
  livro = {
    titulo: "As ondas",
    autoria: "Virginia Woolf",
    imagem: "https://m.media-amazon.com/images/I/81D2d6LqZdS._UF1000,1000_QL80_.jpg"
  }
}
