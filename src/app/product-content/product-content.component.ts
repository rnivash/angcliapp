import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IProduct } from '../shared/iproduct';
import { Bike } from '../shared/bike';

@Component({
  selector: 'app-product-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-content.component.html',
  styleUrls: ['./product-content.component.scss']
})
export class ProductContentComponent {
  currentProduct!: Bike;
  showDescription: boolean = false;

  @Input()
  set item(bike: IProduct) {  
    this.currentProduct =  bike as Bike;
  }

  @Input()
  set showDesc(flag: boolean) {  
    this.showDescription =  flag;
  }

}
