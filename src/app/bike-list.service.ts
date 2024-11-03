import { Injectable } from '@angular/core';
import { IProduct } from './iproduct';
import productsData from '../assets/products.yaml';
import { Bike } from './bike';

@Injectable({
  providedIn: 'root'
})
export class BikeListService {

  constructor() { }

  private getVisibleBike(): IProduct[] {
    return productsData.products.filter((product: Bike) => !product.isHidden);
  }

  public getBikes(): IProduct[] {
    return (this.getVisibleBike() as Bike[]).sort((a, b) =>  a.price - b.price);
  }

  public getBikesDesc(): IProduct[] {
    return (this.getVisibleBike() as Bike[]).sort((a, b) =>  b.price - a.price);
  }

  public getBikeById(id: number): IProduct {
    return (this.getVisibleBike() as Bike[])
    .find((product: Bike) => product.id === id) as IProduct;
  }

  public getBikeByName(name: string): IProduct {
    return (this.getVisibleBike() as Bike[])
    .find((product: Bike) => product.name === name) as IProduct;
  }
}
