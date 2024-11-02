import { Routes } from '@angular/router';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component'
import { ShowroomHomeComponent } from './showroom-home/showroom-home.component';
import { PricePageComponent } from './price-page/price-page.component';
import { ProductComponent } from './product/product.component';


export const routes: Routes = [
    { path: 'product/:id', component: ProductComponent },
    { path: 'price', component: PricePageComponent },
    { path: 'redirect', redirectTo: '/product/2', pathMatch: 'full' },
    { path: '', component: ShowroomHomeComponent },
    { path: '**', component: PageNotfoundComponent  }
  ];


  