import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IProduct } from '../shared/iproduct';
import { BikeListService } from '../shared/bike-list.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-cubic-capacity-page',
  standalone: true,
  imports: [CommonModule, ProductComponent, RouterModule],
  templateUrl: './cubic-capacity-page.component.html',
  styleUrls: ['./cubic-capacity-page.component.scss']
})
export class CubicCapacityPageComponent {

  products: IProduct[] = [];
  allProducts: IProduct[] = [];
  productsToShow: number = 6;
  pageNo: number = 1;
  isLowToHigh: boolean = false;
  loadMoreUrl: string = '/cc';

  @Input()
  set page(pageNo: number) {  
    console.log("me from imput");
    this.pageNo = typeof pageNo === 'string' ? parseInt(pageNo, 10) : pageNo;
    this.products = this.allProducts.slice(0, (this.productsToShow * this.pageNo));
  }

  constructor(private bikeListService: BikeListService, private activeRoute: ActivatedRoute) {
    this.activeRoute.url.subscribe(url => {
      let ccUrl = url.join('/');
      console.log(ccUrl);
      this.allProducts = ccUrl.includes("/desc") ? 
      this.bikeListService.getBikesCcDesc() : this.bikeListService.getBikesCc();
      this.loadMoreUrl = ccUrl.includes("/desc") ? '/cc/desc': '/cc';
    });
  }

}
