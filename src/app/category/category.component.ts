import { Component } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html'
})
export class CategoryComponent {

  products : Product[]= [
    new Product("notebook-xps-9315-nt-blue-gallery-3", "100", "XPS 15"),
    new Product("notebook-inspiron-15-3520-black-gallery-4", "200", "Inspiron 15"),
    new Product("notebook-vostro-7620-nt-gray-gallery-3", "300", "Vostro 15") ,
    new Product("notebook-xps-9315-nt-blue-gallery-3", "100", "XPS 15"),
    new Product("notebook-inspiron-15-3520-black-gallery-4", "200", "Inspiron 15"),
    new Product("notebook-vostro-7620-nt-gray-gallery-3", "300", "Vostro 15") ,
    new Product("notebook-xps-9315-nt-blue-gallery-3", "100", "XPS 15"),
    new Product("notebook-inspiron-15-3520-black-gallery-4", "200", "Inspiron 15"),
    new Product("notebook-vostro-7620-nt-gray-gallery-3", "300", "Vostro 15") ,
    new Product("notebook-xps-9315-nt-blue-gallery-3", "100", "XPS 15"),
    new Product("notebook-inspiron-15-3520-black-gallery-4", "200", "Inspiron 15"),
    new Product("notebook-vostro-7620-nt-gray-gallery-3", "300", "Vostro 15") ,

  ];

  constructor(private router : Router){

  }

  selectProduct(id: string):void{
    this.router.navigateByUrl(`/config/${id}`);
  }

}

class Product{
  constructor(
    public image: string, 
    public id: string,
    public name: string){

  }
}
