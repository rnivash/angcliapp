import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Bike } from '../bike';
import { ProductComponent } from '../product/product.component';
import { BikeListService } from '../bike-list.service';

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [CommonModule, ProductComponent],
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent {

  currentProduct!: Bike;

  @Input()
  set id(name: string) {  
    this.currentProduct =  this.bikeListService.getBikeByName(name) as Bike;
  }

  constructor(private bikeListService: BikeListService) {
  }

}
