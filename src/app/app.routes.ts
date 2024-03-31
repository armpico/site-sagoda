import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { BenefitsComponent } from './benefits/benefits.component';
import { TeamComponent } from './team/team.component';
import { ServicesComponent } from './services/services.component';

export const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'benefits', component: BenefitsComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'team', component: TeamComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', component: AboutComponent },
];
