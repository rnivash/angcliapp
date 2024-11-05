import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IProduct } from '../shared/iproduct';
import { BikeListService } from '../shared/bike-list.service';
import { ProductComponent } from '../product/product.component';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-price-page',
  standalone: true,
  imports: [CommonModule, ProductComponent, RouterModule],
  templateUrl: './price-page.component.html',
  styleUrls: ['./price-page.component.scss']
})
export class PricePageComponent {

  products: IProduct[] = [];
  allProducts: IProduct[] = [];
  productsToShow: number = 6;
  pageNo: number = 1;
  isLowToHigh: boolean = true;
  loadMoreUrl: string = '/price';

  @Input()
  set page(pageNo: number) {  
    this.pageNo = typeof pageNo === 'string' ? parseInt(pageNo, 10) : pageNo;
    this.products = this.allProducts.slice(0, (this.productsToShow * this.pageNo));
  }

  constructor(private bikeListService: BikeListService, private router: Router) {
    this.allProducts = this.bikeListService.getBikes();
    
  }

  




}
