import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IProduct } from '../iproduct';
import { BikeListService } from '../bike-list.service';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-price-page',
  standalone: true,
  imports: [CommonModule, ProductComponent],
  templateUrl: './price-page.component.html',
  styleUrls: ['./price-page.component.scss']
})
export class PricePageComponent {

  products: IProduct[] = [];
  allProducts: IProduct[] = [];
  productsToShow: number = 6;

  constructor(private bikeListService: BikeListService) {
    this.allProducts = this.bikeListService.getBikes();
    this.products = this.allProducts.slice(0, this.productsToShow);
  }

  loadMore(): void {
    const nextProducts = this.allProducts.slice(this.products.length, this.products.length + this.productsToShow);
    this.products = this.products.concat(nextProducts);  
  }




}
