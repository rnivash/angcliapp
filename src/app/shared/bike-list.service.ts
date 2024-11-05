import { Injectable } from '@angular/core';
import productsData from '../../assets/products.yaml';
import { Bike } from './bike';
import { IProduct } from './iproduct';

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

  public getBikesCcDesc(): IProduct[] {
    return (this.getVisibleBike() as Bike[]).sort((a, b) =>  b.cc - a.cc);
  }

  public getBikesCc(): IProduct[] {
    return (this.getVisibleBike() as Bike[]).sort((a, b) =>  a.cc - b.cc);
  }

  public getBikesPowerDesc(): IProduct[] {
    return (this.getVisibleBike() as Bike[]).sort((a, b) =>  b.torque - a.torque);
  }

  public getBikesPower(): IProduct[] {
    return (this.getVisibleBike() as Bike[]).sort((a, b) =>  a.torque - b.torque);
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
