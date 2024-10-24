import { CurrencyPipe } from '@angular/common';
import { Component, OnInit , Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Bike } from '../bike';
import {BikeListService} from '../bike-list.service'
import { IProduct } from '../iproduct';
@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss'],
  imports: [CurrencyPipe],
  standalone: true
})
export class ProductPageComponent implements OnInit {

  products : IProduct[] = [];

  currentProductId!: number;

  currentProduct!: Bike|undefined;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.products = new BikeListService().getBikes();
  }

  @Input()
  set id(id: number) {  
    this.currentProductId = typeof id === 'string' ? parseInt(id, 10) : id;
    this.currentProduct =  this.products.find(product => product.id == id) as Bike;
    console.log('Current Product ID:', this.currentProductId);
  }

  ngOnInit(): void {

  }

  goToNextProduct(): void {
    const currentIndex = this.products.findIndex(product => product.id === this.currentProductId);
    if (currentIndex !== -1 && currentIndex < this.products.length - 1) {
      const nextProductId = this.products[currentIndex + 1].id;
      this.router.navigate(['/product', nextProductId]);
    }
  }

  goToPreviousProduct(): void {
    const currentIndex = this.products.findIndex(product => product.id === this.currentProductId);
    if (currentIndex > 0) {
      const previousProductId = this.products[currentIndex - 1].id;
      this.router.navigate(['/product', previousProductId]);
    }
  }

  hasNextProduct(): boolean {
    const currentIndex = this.products.findIndex(product => product.id === this.currentProduct?.id);
    return currentIndex < this.products.length - 1;
  }
  
  hasPreviousProduct(): boolean {
    const currentIndex = this.products.findIndex(product => product.id === this.currentProduct?.id);
    return currentIndex > 0;
  }
  
  
}




