import { Routes } from '@angular/router';
import { Home } from './pagine/home/home';
import { About } from './pagine/about/about';
import { Contact } from './pagine/contact/contact';
import { Service } from './pagine/service/service';
import { Products } from './pagine/products/products';
import { Hoodies } from './pagine/hoodies/hoodies';
import { Industrial } from './pagine/industrial/industrial';
export const routes: Routes = [
  { path: '', component: Home },
  { path: 'home', component: Home },
  { path: 'about', component: About },
  { path: 'service', component: Service },
  { path: 'products', component: Products },

  { path: 'hoodies', component: Hoodies },
  // Industrial page route
  { path: 'industrial', component: Industrial },
  // Keep handling the common typo by redirecting it to the correct route
  { path: 'indusatrial', redirectTo: 'industrial', pathMatch: 'full' },
  { path: 'contact', component: Contact }
];
