import { Component, Input } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { matKeyboardArrowDown } from '@ng-icons/material-icons/baseline';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [NgIcon],
  providers: [provideIcons({ matKeyboardArrowDown })],
  templateUrl: './question.component.html',
  styleUrl: './question.component.scss'
})
export class QuestionComponent {
  @Input({ required: true }) question!:string
  @Input({ required: true }) response!:string

  protected stateResponse = false;
  protected hendleResponse() {
    this.stateResponse = !this.stateResponse
  }
}
