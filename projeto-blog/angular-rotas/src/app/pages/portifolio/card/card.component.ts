import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  constructor(
              private activeRoute: ActivatedRoute,
              private navegador: Router) {

    //recuperar o parametro id da rota
    //127.0.0.1:4200/portifolio/{1}
    this.activeRoute.params.subscribe(
      res => console.log(res)
    )

    this.activeRoute.firstChild?.params.subscribe(
      res => console.log(res)
    )

    //recuperando todos os dados da rota ( id, name, token)
    //127.0.0.1:4200/portifolio/1?name=nadir&token=123
    this.activeRoute.queryParams.subscribe(
      res => console.log(res)
    )
  }
  // ngOnInit(): void {
  //   setInterval(() => {
  //     //força a pagina para navegar para rota escolhida
  //     this.navegador.navigate(['/'])
  //   }, 5000)
  // }

}
