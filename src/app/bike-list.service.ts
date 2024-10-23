import { Injectable } from '@angular/core';
import { Bike } from './bike';
import { IProduct } from './iproduct';
import productsData from '../assets/products.yaml';

@Injectable({
  providedIn: 'root'
})
export class BikeListService {

  constructor() { }

  public getBikes(): IProduct[] {
    return productsData.products;
  }


}
