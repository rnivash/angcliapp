import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss'],
  imports: [CurrencyPipe],
  standalone: true
})

export class ProductPageComponent {
  product = {
    name: 'TVS Sport',
    description: 'Powered by a 109.7cc, single-cylinder, air-cooled engine, TVS Sport BS6 offers a Behtareen mileage It provides 15% more mileage with its ETFI Technology. The engine is tuned to offer a balance of power and fuel efficiency, making it an ideal choice for daily commuting. ',
    price: 80993,
    specs: {
      engine: '300cc',
      fuelType: 'Petrol',
      mileage: '35 km/l',
      topSpeed: 180
    }
  };
}
