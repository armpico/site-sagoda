import { Component, Input, input } from '@angular/core';
import { CONTACT_INFO } from '../data';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  contactInfo = CONTACT_INFO;
}
