import { Component, OnInit, Input } from '@angular/core';
import { Producto } from 'src/app/core/models/productos'
import { CarritoService } from 'src/app/core/services/carrito.service'

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  @Input() product: Producto;
  constructor(private carritoService: CarritoService) { }

  ngOnInit(): void {
  }
  addShoppingCard() {
    this.carritoService.addCarrito(this.product)
  }

}
