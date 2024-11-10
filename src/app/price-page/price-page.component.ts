import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IProduct } from '../shared/iproduct';
import { BikeListService } from '../shared/bike-list.service';
import { ProductComponent } from '../product/product.component';
import { ActivatedRoute, RouterModule } from '@angular/router';

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
  isLowToHigh: boolean = false;
  loadMoreUrl: string = '/price';

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
      this.bikeListService.getBikesDesc() : this.bikeListService.getBikes();
      this.loadMoreUrl = ccUrl.includes("/desc") ? '/price/desc': '/price';
      this.isLowToHigh = !ccUrl.includes("/desc");
    });
  }

  




}
