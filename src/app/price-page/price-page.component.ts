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

  products : IProduct[] = [];

  constructor(private bikeListService: BikeListService) {
    this.products = this.bikeListService.getBikes();
  }

  loadMore(): void {
    this.products = this.products.concat(this.bikeListService.getBikes());    
  }




}
