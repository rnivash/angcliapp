import { Routes } from '@angular/router';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component'
import { PricePageComponent } from './price-page/price-page.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { PriceDescPageComponent } from './price-page/price-desc-page.component';


export const routes: Routes = [
    { path: 'product/:id', component: ProductPageComponent },
    { path: 'price/desc/:page', component: PriceDescPageComponent },
    { path: 'price/:page', component: PricePageComponent },
    { path: 'price', redirectTo: '/price/1', pathMatch: 'full' },
    { path: '', redirectTo: '/price/1', pathMatch: 'full' },
    { path: '**', component: PageNotfoundComponent  }
  ];


  