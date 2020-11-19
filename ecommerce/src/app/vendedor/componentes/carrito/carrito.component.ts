import { Component, OnInit } from '@angular/core';
import { CarritoService } from 'src/app/core/services/carrito.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  countProduct: any
  constructor(private carritoService: CarritoService) { }
  ngOnInit(): void {
    this.countProduct = this.carritoService.getTotalCarrito()
  }
}
