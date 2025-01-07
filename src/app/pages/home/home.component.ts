import { Component } from '@angular/core';

// Components
import { BannerComponent } from "../../components/banner/banner.component";
import { RangeComponent } from "../../components/range/range.component";
import { CardsComponent } from "../../components/cards/cards.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { ContentComponent } from "../../components/content/content.component";
import { WhatsComponent } from "../../components/whats/whats.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BannerComponent, RangeComponent, CardsComponent, FooterComponent, ContentComponent, WhatsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
