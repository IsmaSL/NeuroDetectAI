import { Component } from '@angular/core';
import { AboutUsComponent } from '../shared/components/about-us/about-us.component';
import { ServicesComponent } from '../shared/components/services/services.component';
import { TestimonialsComponent } from '../shared/components/testimonials/testimonials.component';
import { PricingComponent } from '../shared/components/pricing/pricing.component';
import { FaqComponent } from '../shared/components/faq/faq.component';
import { ContactUsComponent } from '../shared/components/contact-us/contact-us.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    AboutUsComponent,
    ServicesComponent,
    TestimonialsComponent,
    PricingComponent,
    FaqComponent,
    ContactUsComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  title = 'Home';
}
