import { AfterViewInit, Component, OnInit } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { matKeyboardArrowLeft as arrowLeft, matKeyboardArrowRight as arrowRight } from '@ng-icons/material-icons/baseline';

@Component({
  selector: 'app-feedbacks',
  standalone: true,
  imports: [NgIcon],
  providers: [provideIcons({ arrowLeft, arrowRight })],
  templateUrl: './feedbacks.component.html',
  styleUrl: './feedbacks.component.scss'
})

export class FeedbacksComponent {

  interval: any
  currentIndex: number = 0

  protected feedbacks: ReadonlyArray<IFeedbacks> = [
    {
      name: 'João Silva',
      comment: 'O editor mobile foi um dos melhores investimentos que fiz. Me ajudou demais. um conteúdo fácil de aprender, direto ao ponto, sem firulas. Sem contar o suporte que temos no grupo exclusivo. Super indico e recomendo. '
    },
    {
      name: 'Maria Oliveira',
      comment: 'Ótimo amigos. Depois que fiz o curso estou conseguindo trabalhar na área de videomaker. Se Deus quiser, logo, logo vou sair da CLT.'
    },
    {
      name: 'Carlos Mendes',
      comment: "Gostaria de te agradecer pelas aulas, por toda a ajuda que você nos proporciona aqui no grupo ,sempre tira as dúvidas e dá críticas construtivas sobre os nossos vídeos, isso é muito importante pro nosso crescimento e desenvolvimento profissional. A respeito do curso, muito didático, muito direto, muito 'simples' e de fácil entendimento até mesmo pra quem nunca teve contato com ferramentas de gravação e edição de vídeos. Foi o melhor investimento que fiz. seu conhecimento nos agrega muito."
    },
    {
      name: 'Desconhecido',
      comment: 'Estou gostando bastante. Eu já tinha feito ouros cursos parecidos, mas estava faltando pra mim, algo que eu conseguisse aplicar mais no meu dia a dia na loja.'
    },
    {
      name: 'Desconhecido',
      comment: 'Estou tendo várias sacadas com o curso. Além de todo o suporte. Esse contato podendo tirar dúvidas com você é um enorme diferencial.'
    }
  ];


  protected nextFeedback() {
    this.resetCarousel()
    this.currentIndex = (this.currentIndex + 1) % this.feedbacks.length;
  }

  protected prevFeedback() {
    this.resetCarousel()
    this.currentIndex = (this.currentIndex - 1 + this.feedbacks.length) % this.feedbacks.length;
  }

  private startCarousel() {
    this.interval = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.feedbacks.length 
    }, 3000)
  }

  protected resetCarousel() {
    clearInterval(this.interval)
    this.startCarousel()
  }

  // ngAfterViewInit(): void {
  //   setTimeout(() => {
  //     this.startCarousel();
  //   }, 0);
  // }

}

interface IFeedbacks {
  name: string
  comment: string
}
