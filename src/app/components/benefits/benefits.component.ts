import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';

// Icons
import { bootstrapBadgeAd, bootstrapBarChart, bootstrapCashCoin, bootstrapCollectionPlay, bootstrapGraphUpArrow, bootstrapMortarboardFill, bootstrapPatchCheckFill, bootstrapStars } from '@ng-icons/bootstrap-icons';
import { matGroups } from '@ng-icons/material-icons/baseline';

@Component({
  selector: 'app-benefits',
  standalone: true,
  imports: [CommonModule, NgIcon],
  providers: [provideIcons({ bootstrapCollectionPlay, bootstrapStars, bootstrapGraphUpArrow, bootstrapBadgeAd, bootstrapBarChart, bootstrapPatchCheckFill, matGroups, bootstrapCashCoin,bootstrapMortarboardFill })],
  templateUrl: './benefits.component.html',
  styleUrl: './benefits.component.scss'
})
export class BenefitsComponent {
  benefits: ReadonlyArray<IBenefits> = [
    {
      icon: 'bootstrapCollectionPlay',
      title: 'Aprender a gravar e editar os seus reels do zero'
    },
    {
      icon: 'bootstrapStars',
      title: 'Aprender a fazer efeitos e transições que despertam a curiosidade'
    },
    {
      icon: 'bootstrapGraphUpArrow',
      title: 'Elevar o nível dos seus vídeos'
    },
    {
      icon: 'bootstrapBadgeAd',
      title: 'Produzir vídeos comerciais'
    },
    {
      icon: 'bootstrapBarChart',
      title: 'Aumentar seu alcance e engajamento nas redes'
    },
    {
      icon: 'bootstrapPatchCheckFill',
      title: 'Aprender a fazer cortes de destaques'
    },
    {
      icon: 'matGroups',
      title: 'Ganhar mais seguidores e clientes'
    },
    {
      icon: 'bootstrapCashCoin',
      title: 'Aumentar seu faturamento com o Instagram'
    },
    {
      icon: 'bootstrapMortarboardFill',
      title: 'Saber como se colocar no mercado de trabalho'
    },
  ]
}

interface IBenefits {
  icon: string
  title: string
}
