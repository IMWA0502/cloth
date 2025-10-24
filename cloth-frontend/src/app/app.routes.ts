import { Routes } from '@angular/router';
import { Home } from './pagine/home/home';
import { About } from './pagine/about/about';
import { Contact } from './pagine/contact/contact';
import { Service } from './pagine/service/service';
import { Products } from './pagine/products/products';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'home', component: Home },
  { path: 'about', component: About },
  { path: 'service', component: Service },
  { path: 'products', component: Products },
  { path: 'contact', component: Contact }
];
