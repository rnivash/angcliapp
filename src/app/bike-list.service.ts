import { Injectable } from '@angular/core';
import { IProduct } from './iproduct';
import productsData from '../assets/products.yaml';
import { Bike } from './bike';

@Injectable({
  providedIn: 'root'
})
export class BikeListService {

  constructor() { }

  public getBikes(): IProduct[] {
    return productsData.products.filter((product: Bike) => !product.isHidden);
  }

  public getBikeById(id: number): IProduct {
    return productsData.products.find((product: Bike) => product.id === id) as IProduct;
  }

  public getBikeByName(name: string): IProduct {
    return productsData.products.find((product: Bike) => product.name === name) as IProduct;
  }
}
