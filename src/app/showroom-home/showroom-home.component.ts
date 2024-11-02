import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PricePageComponent } from '../price-page/price-page.component';

@Component({
  selector: 'app-showroom-home',
  standalone: true,
  imports: [CommonModule, PricePageComponent],
  templateUrl: './showroom-home.component.html',
  styleUrls: ['./showroom-home.component.scss']
})
export class ShowroomHomeComponent {

}
