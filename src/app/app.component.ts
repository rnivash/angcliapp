import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `<section class="products">
            <!-- Product listing goes here -->
            <article class="product">
                <img src="product1.jpg" alt="Product 1">
                <h2>Product 1 Name</h2>
                <p>Description of Product 1</p>
                <p>Price: $XX.XX</p>
                <button>Add to Cart</button>
            </article>
            <!-- Repeat the above article structure for each product -->
        </section>`
})

export class appComponent {
  
}
