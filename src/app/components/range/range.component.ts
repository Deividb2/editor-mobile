import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { matComputer, matPeople, matMenuBook } from '@ng-icons/material-icons/baseline'

@Component({
  selector: 'app-range',
  standalone: true,
  imports: [NgIcon],
  providers: [provideIcons({ matComputer, matPeople, matMenuBook })],
  templateUrl: './range.component.html',
  styleUrl: './range.component.scss'
})
export class RangeComponent {

}
