import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-card-item',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './card-item.component.html',
  styleUrl: './card-item.component.scss'
})
export class CardItemComponent {

  @Input() temperatureIcon!: IconProp;
  @Input() temperature!: any;
  @Input() labelIcon!: string;

}
