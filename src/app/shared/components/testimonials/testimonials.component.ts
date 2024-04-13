import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent {
  items = [
    { imgSrc: 'assets/images/avatars/male-1.jpg', title: 'A fully-fledged design toolkit. I love this theme.', name: 'Marco Rodríguez', job: 'Developer' },
    { imgSrc: 'assets/images/avatars/female-2.jpg', title: 'I fell in love with the design immediately, the best.', name: 'Gabby Kidman', job: 'Business Owner' },
    { imgSrc: 'assets/images/avatars/male-4.jpg', title: 'It covers all bases for a bootstrapped startup!', name: 'Benjamin Cameron', job: 'Designer' },
    { imgSrc: 'assets/images/avatars/female-3.jpg', title: 'I couldn’t have done it without the team.', name: 'Anna Potter', job: 'Designer' },
    { imgSrc: 'assets/images/avatars/male-5.jpg', title: 'The team were very helpful, thrilled with Leap', name: 'Andrew Kingsman', job: 'Business Owner' },
    { imgSrc: 'assets/images/avatars/female-4.jpg', title: 'A beautifully detailed product.', name: 'Hallen Shultz', job: 'Business Owner' },
    // Agrega más objetos según sea necesario
  ];

  config_flickity = {
    "cellAlign": "center",
    "contain": true,
    "wrapAround": true,
    "prevNextButtons": false,
    "pageDots": false,
    "autoPlay": 5000
  };
  
}
