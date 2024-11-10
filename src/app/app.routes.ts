import { Routes } from '@angular/router';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component'
import { PricePageComponent } from './price-page/price-page.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { AboutComponent } from './about/about.component';
import { CubicCapacityPageComponent } from './cubic-capacity-page/cubic-capacity-page.component';
import { PowerPageComponent } from './power-page/power-page.component';


export const routes: Routes = [
    { path: 'about', component: AboutComponent },
    { path: 'cc/:page', component: CubicCapacityPageComponent },
    { path: 'cc/desc/:page', component: CubicCapacityPageComponent },
    { path: 'power/:page', component: PowerPageComponent },
    { path: 'power/desc/:page', component: PowerPageComponent },
    { path: 'product/:id', component: ProductPageComponent },
    { path: 'price/desc/:page', component: PricePageComponent },
    { path: 'price/:page', component: PricePageComponent },
    { path: 'price', redirectTo: '/price/1', pathMatch: 'full' },
    { path: '', redirectTo: '/price/1', pathMatch: 'full' },
    { path: '**', component: PageNotfoundComponent  }
  ];


  