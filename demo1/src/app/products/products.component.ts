import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
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

  constructor() { }

  ngOnInit(): void {
  }

  handleProductAddToCart(id) {
    console.log(id)
  }
}
