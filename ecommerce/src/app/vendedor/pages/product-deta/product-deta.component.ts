import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { ApiService } from 'src/app/core/services/api.service'
import { Producto } from 'src/app/core/models/productos'
import { CarritoService } from 'src/app/core/services/carrito.service'

@Component({
  selector: 'app-product-deta',
  templateUrl: './product-deta.component.html',
  styleUrls: ['./product-deta.component.css']
})
export class ProductDetaComponent implements OnInit {
  product: Producto = {
    idproducto: 0,
    nombre: '',
    descripcion: '',
    categoria: {},
    imagen: '',
    precio: 0,
    sku: '',
    stock: 0
  }
  id: number
  constructor(
    private activatedRoute: ActivatedRoute,
    private apiService: ApiService,
    private carrito: CarritoService ) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params.id
    this.apiService.getProductById(this.id).then((product: Producto) => {
      this.product = product
    })
  }
  addCarritoDeCompras() {
    this.carrito.addCarrito(this.product)
  }

}
