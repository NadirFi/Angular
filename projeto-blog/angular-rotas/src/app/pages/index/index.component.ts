import { Component } from '@angular/core';
import { TitleComponent } from './title/title.component';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [TitleComponent],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {

}
