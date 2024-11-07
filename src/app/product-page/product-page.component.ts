import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Bike } from '../shared/bike';
import { ProductComponent } from '../product/product.component';
import { BikeListService } from '../shared/bike-list.service';
import { ProductImageComponent } from '../product-image/product-image.component';
import { ProductContentComponent } from '../product-content/product-content.component';

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [CommonModule, ProductComponent, ProductImageComponent, ProductContentComponent],
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
