import { Component, Input } from '@angular/core';
import { CatFact } from 'src/app/model/cat-fact.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() fact!: CatFact;
  time: number = Date.now();
}
