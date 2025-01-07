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

}
