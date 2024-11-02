import { Routes } from '@angular/router';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component'
import { PricePageComponent } from './price-page/price-page.component';
import { ProductPageComponent } from './product-page/product-page.component';


export const routes: Routes = [
    { path: 'product/:id', component: ProductPageComponent },
    { path: 'price', component: PricePageComponent },
    { path: '', redirectTo: '/price', pathMatch: 'full' },
    { path: '**', component: PageNotfoundComponent  }
  ];


  