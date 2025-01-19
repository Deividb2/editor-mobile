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
      question: "Quais formas de pagamento?",
      response: "Cartão de crédito, boleto e pix."
    },
    {
      question: "O conteúdo é ao vivo?",
      response: "Não. Como nossos alunos possuem rotinas completamente diferentes, o conteúdo inteiro está gravado para que você possa assistir de onde e quando quiser."
    },
    {
      question: "E se eu tiver dúvidas?",
      response: "Você poderá tirar suas dúvidas dentro do grupo VIP no Telegram e na plataforma de aulas."
    },
    {
      question: "Até quando posso acessar as aulas?",
      response: "Por um ano inteiro - dá tempo para você assistir e reassistir quantas vezes você desejar durante esse período."
    },
    {
      question: "Como eu acesso os produtos?",
      response: "Ao finalizar a compra, será enviado o link com sua senha no seu e-mail."
    }
  ]
}
