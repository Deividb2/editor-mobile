import { Component } from '@angular/core';

// Components
import { BannerComponent } from "../../components/banner/banner.component";
import { RangeComponent } from "../../components/range/range.component";
import { CardsComponent } from "../../components/cards/cards.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { WhatsComponent } from "../../components/whats/whats.component";
import { AboutComponent } from "../../components/about/about.component";
import { FeedbacksComponent } from "../../components/feedbacks/feedbacks.component";
import { FaqComponent } from "../../components/faq/faq.component";
import { PriceComponent } from "../../components/price/price.component";
import { BenefitsComponent } from "../../components/benefits/benefits.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BannerComponent, RangeComponent, CardsComponent, FooterComponent, WhatsComponent, AboutComponent, FeedbacksComponent, FaqComponent, PriceComponent, BenefitsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
