import { Routes } from '@angular/router';
import { ProductPageComponent } from './product-page/product-page.component';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component'
import { ShowroomHomeComponent } from './showroom-home/showroom-home.component';


export const routes: Routes = [
    { path: 'product/:id', component: ProductPageComponent },
    { path: 'redirect', redirectTo: '/product/2', pathMatch: 'full' },
    { path: '', component: ShowroomHomeComponent },
    { path: '**', component: PageNotfoundComponent  }
  ];


  