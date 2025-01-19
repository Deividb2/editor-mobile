import { Component } from '@angular/core';

// Icons
import { NgIcon, provideIcons } from '@ng-icons/core';
import { bootstrapWhatsapp as whats } from '@ng-icons/bootstrap-icons';

@Component({
  selector: 'app-whats',
  standalone: true,
  imports: [NgIcon],
  providers: [provideIcons({ whats })],
  templateUrl: './whats.component.html',
  styleUrl: './whats.component.scss'
})
export class WhatsComponent {

  private message: string = "Olá, Deivid!!"
  private phoneNumber: string = "5521977201714"
  private encodedMessage = encodeURIComponent(this.message)

  openWhats() {
    window.open(`https://wa.me/${this.phoneNumber}?text=${this.encodedMessage}`)
  }
}
