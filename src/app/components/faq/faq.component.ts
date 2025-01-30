import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionComponent } from "./question/question.component";

interface IQuestions {
  question: string
  response: string
}

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule, QuestionComponent],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FaqComponent {

  questionsFaq: ReadonlyArray<IQuestions> = [
    {
      question: "O curso é pra iniciante?",
      response: "Sim! O Editor Mobile é perfeito para quem nunca editou vídeos antes. O curso começa do zero, ensinando desde conceitos básicos até técnicas avançadas de edição para redes sociais."
    },
    {
      question: "Preciso de um celular potente?",
      response: "Não! Você pode editar vídeos incríveis em qualquer smartphone, sem precisar de um modelo top de linha."
    },
    {
      question: "Posso assistir às aulas no meu próprio ritmo?",
      response: "Sim! Todo o conteúdo é gravado e você pode assistir quando e quantas vezes quiser, no seu tempo, sem pressão."
    },
    {
      question: "Posso aplicar esse conhecimento para ganhar dinheiro?",
      response: "Com certeza! A edição de vídeos para redes sociais está em alta, e muitos alunos do Editor Mobile já estão lucrando com trabalhos na área."
    },
    {
      question: "Até quando posso acessar as aulas?",
      response: "Por um ano inteiro - dá tempo para você assistir e reassistir quantas vezes você desejar durante esse período."
    },
    {
      question: "Quais formas de pagamento?",
      response: "Cartão de crédito, boleto e pix."
    },
    {
      question: "E se eu tiver dúvidas?",
      response: "Você poderá tirar suas dúvidas dentro do grupo VIP no Telegram e na plataforma de aulas."
    },
    {
      question: "O que acontece depois da compra",
      response: "Após a compra, você recebe um e-mail com seu login e senha para acessar as aulas imediatamente. Se não encontrar, verifique a caixa de spam ou entre em contato com nosso suporte."
    }
  ]
}
