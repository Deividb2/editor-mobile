import { Component, Input } from '@angular/core';
import { bootstrapBook, bootstrapCheckAll, bootstrapGraphUpArrow } from '@ng-icons/bootstrap-icons';
import { NgIcon, provideIcons } from '@ng-icons/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgIcon],
  providers: [provideIcons({ bootstrapGraphUpArrow, bootstrapCheckAll, bootstrapBook })],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input({ required: true }) titleCard!: string
  @Input({ required: true }) text!: string
  @Input({ required: true }) nameIcon!: string
}
