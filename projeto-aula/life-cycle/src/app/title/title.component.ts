import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [],
  templateUrl: './title.component.html',
  styleUrl: './title.component.css'
})
export class TitleComponent implements OnInit, OnChanges {

	@Input() nome:string = '';

	constructor() {
		console.log("Construtor");

	}
	ngOnChanges(): void {
		console.log(`OnChanges ${this.nome}`);

	}

	ngOnInit(): void {
		this.nome = this.nome + "x";
		console.log(`OnInit ${this.nome}`);

	}

}
