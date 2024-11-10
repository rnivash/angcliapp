import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Bike } from '../shared/bike';
import { IProduct } from '../shared/iproduct';

@Component({
  selector: 'app-product-image',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-image.component.html',
  styleUrls: ['./product-image.component.scss']
})
export class ProductImageComponent {

  currentProduct!: Bike | any;

  @Input()
  set item(bike: IProduct) {  
    this.currentProduct =  bike as Bike;
  }

}
