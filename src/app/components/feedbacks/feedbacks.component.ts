import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { matStar } from '@ng-icons/material-icons/baseline';

@Component({
  selector: 'app-feedbacks',
  standalone: true,
  imports: [CommonModule, NgIcon],
  providers: [provideIcons({ matStar })],
  templateUrl: './feedbacks.component.html',
  styleUrl: './feedbacks.component.scss'
})

export class FeedbacksComponent {
  protected feedbacks: ReadonlyArray<IFeedbacks> = [
    {
      comment: 'O editor mobile foi um dos melhores investimentos que fiz. Me ajudou demais. um conteúdo fácil de aprender, direto ao ponto, sem firulas. Sem contar o suporte que temos no grupo exclusivo. Super indico e recomendo. '
    },
    {
      comment: 'Ótimo amigos. Depois que fiz o curso estou conseguindo trabalhar na área de videomaker. Se Deus quiser, logo, logo vou sair da CLT.'
    },
    {
      comment: 'Estou gostando bastante. Eu já tinha feito ouros cursos parecidos, mas estava faltando pra mim, algo que eu conseguisse aplicar mais no meu dia a dia na loja.'
    },
    {
      comment: 'Estou tendo várias sacadas com o curso. Além de todo o suporte. Esse contato podendo tirar dúvidas com você é um enorme diferencial.'
    },
    {
      comment: "Gostaria de te agradecer pelas aulas, por toda a ajuda que você nos proporciona aqui no grupo, sempre tira as dúvidas e dá críticas construtivas sobre os nossos vídeos. A respeito do curso, muito didático, muito direto, muito 'simples' e de fácil entendimento até mesmo pra quem nunca teve contato com ferramentas de gravação e edição de vídeos. Foi o melhor investimento que fiz."
    }
  ];
  
  
  
}

interface IFeedbacks {
  comment: string
}
