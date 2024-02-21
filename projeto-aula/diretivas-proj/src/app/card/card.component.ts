import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  produtos: string[] = [];
  menuType: string = "";

constructor() {
  this.produtos = [
    "Mouse",
    "Teclado",
    "Cabo",
    "Fotn",
  ]
}

adicionar() {
  this.produtos.push("Nadir");
}

}
