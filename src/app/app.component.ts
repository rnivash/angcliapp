import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { Meta } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavigationComponent],
  template: '<app-navigation></app-navigation><router-outlet />',
  styles: ['']
})

export class appComponent {

  constructor(private meta: Meta) {
    this.meta.addTag({ 
      name: 'description', 
      content: 'Discover top two-wheeler models, detailed specs, and comparisons. Find the perfect bike for your lifestyle, from commuter bikes to high-performance rides' });
  }
  
  
}
