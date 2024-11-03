import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '../product/product.component';
import { BikeListService } from '../bike-list.service';
import { Router, RouterModule } from '@angular/router';
import { IProduct } from '../iproduct';

@Component({
  selector: 'app-price-desc-page',
  standalone: true,
  imports: [CommonModule, ProductComponent, RouterModule],
  templateUrl: './price-page.component.html',
  styleUrls: ['./price-page.component.scss']
})
export class PriceDescPageComponent {

  products: IProduct[] = [];
  allProducts: IProduct[] = [];
  productsToShow: number = 6;
  pageNo: number = 1;
  isLowToHigh: boolean = false;
  loadMoreUrl: string = '/price/desc';

  @Input()
  set page(pageNo: number) {  
    this.pageNo = typeof pageNo === 'string' ? parseInt(pageNo, 10) : pageNo;
    this.products = this.allProducts.slice(0, (this.productsToShow * this.pageNo));
  }

  constructor(private bikeListService: BikeListService, private router: Router) {
    this.allProducts = this.bikeListService.getBikesDesc();
    
  }


}
