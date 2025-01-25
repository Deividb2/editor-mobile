import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  private message: string = "Olá, Deivid!!"
  private phoneNumber: string = "5521977201714"
  private encodedMessage = encodeURIComponent(this.message)

  openWhats() {
    window.open(`https://wa.me/${this.phoneNumber}?text=${this.encodedMessage}`)
  }

}
