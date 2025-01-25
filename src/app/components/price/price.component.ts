import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { matCheck, matCheckCircle } from '@ng-icons/material-icons/baseline';

@Component({
  selector: 'app-price',
  standalone: true,
  imports: [NgIcon],
  providers: [provideIcons({ matCheck, matCheckCircle })],
  templateUrl: './price.component.html',
  styleUrl: './price.component.scss'
})
export class PriceComponent {

}
