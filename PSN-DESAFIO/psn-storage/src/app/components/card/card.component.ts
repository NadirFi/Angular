import { Component, Input } from '@angular/core';
import { CardLabelComponent } from "./card-label/card-label.component";
import { CardPricingComponent } from "./card-pricing/card-pricing.component";

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CardLabelComponent, CardPricingComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

	@Input()
	public gameLabel: string = "";

	@Input()
	public gameType: string = "";

	@Input()
	public gamePrice: string = "";

	@Input()
	public gameCover: string = "";

}
