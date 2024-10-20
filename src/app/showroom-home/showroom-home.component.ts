import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductPageComponent } from '../product-page/product-page.component';

@Component({
  selector: 'app-showroom-home',
  standalone: true,
  imports: [CommonModule, ProductPageComponent],
  templateUrl: './showroom-home.component.html',
  styleUrls: ['./showroom-home.component.scss']
})
export class ShowroomHomeComponent {

}
