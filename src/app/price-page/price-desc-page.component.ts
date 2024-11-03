import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '../product/product.component';
import { BikeListService } from '../bike-list.service';
import { Router } from '@angular/router';
import { IProduct } from '../iproduct';

@Component({
  selector: 'app-price-desc-page',
  standalone: true,
  imports: [CommonModule, ProductComponent],
  templateUrl: './price-page.component.html',
  styleUrls: ['./price-page.component.scss']
})
export class PriceDescPageComponent {

  products: IProduct[] = [];
  allProducts: IProduct[] = [];
  productsToShow: number = 6;
  pageNo: number = 1;

  @Input()
  set page(pageNo: number) {  
    this.pageNo = typeof pageNo === 'string' ? parseInt(pageNo, 10) : pageNo;
    this.products = this.allProducts.slice(0, (this.productsToShow * this.pageNo));
  }

  constructor(private bikeListService: BikeListService, private router: Router) {
    this.allProducts = this.bikeListService.getBikesDesc();
    
  }

  loadMore(): void {
    this.pageNo += 1;
    this.router.navigate(['/price/desc', this.pageNo]);
    // const nextProducts = this.allProducts.slice(this.products.length, this.products.length + this.productsToShow);
    // this.products = this.products.concat(nextProducts);  
  }


}
