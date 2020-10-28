import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products = [
    {
      id: 1,
      image: 'assets/images/camiseta.png',
      title: 'Camisa',
      price: 80,
      description: 'bla bla bla bla'
    },
    {
      id: 2,
      image: 'assets/images/hoodie.jpg',
      title: 'Hoodie',
      price: 120,
      description: 'bla bla bla bla'
    },
    {
      id: 3,
      image: 'assets/images/mug.png',
      title: 'Taza',
      price: 90,
      description: 'bla bla bla bla'
    }
  ]
  handleProductAddToCart(id) {
    console.log(id)
  }
}
