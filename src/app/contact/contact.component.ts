import { Component } from '@angular/core';
import { CONTACT_INFO } from '../data';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  contactInfo = CONTACT_INFO;
}
