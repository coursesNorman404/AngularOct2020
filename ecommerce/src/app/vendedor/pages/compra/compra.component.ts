import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/core/models/cliente'
import { CarritoService } from 'src/app/core/services/carrito.service'
import { ApiService } from 'src/app/core/services/api.service'

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent implements OnInit {
  carrito: any
  totalCarrito: any
  clientes: Cliente[]
  cliente: Cliente
  usuario = {
    idusuario: 2
  }
  token: string
  constructor(private carritoService: CarritoService, private apiService: ApiService ) { }

  ngOnInit(): void {
    this.carritoService.getCarrito().subscribe(carrito => {
      this.carrito = carrito
    })
    this.carritoService.getTotalCarrito().subscribe(totalCarrito => {
      this.totalCarrito = totalCarrito
    })
    this.apiService.getClientes().then((clientes: Cliente[]) => {
      this.clientes = clientes
    })
  }
  newCompra() {
    let compra = {
      cliente: {
        idcliente: this.cliente
      },
      usuario: this.usuario,
      fecha: new Date(),
      total: this.totalCarrito.total,
      compraproductos: this.carrito
    }
    this.apiService.setCompra(compra)
    .then(res => {
      this.carritoService.clearCarrito()
      alert('Compra exitosa')
    })
    .catch(err => {
      console.log(err)
    })
  }
}
