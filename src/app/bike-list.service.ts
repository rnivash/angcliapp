import { Injectable } from '@angular/core';
import { Bike } from './bike';
import { IProduct } from './iproduct';

@Injectable({
  providedIn: 'root'
})
export class BikeListService {

  constructor() { }

  public getBikes(): IProduct[] {
    return [new Bike(1, "TVS Sport", "Test j"), new Bike(2, "TVS Sport 2", "test y")];
  }


}
