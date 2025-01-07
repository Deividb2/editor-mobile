import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Icons
import { NgIcon, provideIcons } from '@ng-icons/core'
import { bootstrapCheck } from '@ng-icons/bootstrap-icons'

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [CommonModule, NgIcon],
  providers: [provideIcons({ bootstrapCheck })],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {
  courseContent: ReadonlyArray<string> = [
    'Lista de equipamentos para iniciar',
    'Como usar os equipamentos',
    'Cuidados essenciais',
    'Exercícios para pegar firmeza com a navalha',
    'Primeiro corte de cabelo',
    'Como fazer o pé do cabelo',
    'Nomeclatura dos cortes',
    'Técnicas em corte degradê',
    'Técnica de pigmentação',
    'Barba na navalha',
    'Pigmentação em barba',
    'Técnicas em corte com tesoura',
    'Como usar o secador'
  ] 
}
