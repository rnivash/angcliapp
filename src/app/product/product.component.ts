import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Bike } from '../shared/bike';
import { IProduct } from '../shared/iproduct';
import { ProductImageComponent } from '../product-image/product-image.component';
import { ProductContentComponent } from "../product-content/product-content.component";

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, CurrencyPipe, ProductImageComponent, ProductContentComponent],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  currentProduct!: Bike | any;

  displayDesc: boolean = false;
  
  @Input()
  set item(bike: IProduct) {  
    this.currentProduct =  bike as Bike;
  }

  @Input()
  set showDesc(show: boolean) {  
    this.displayDesc =  show;
  }



}



