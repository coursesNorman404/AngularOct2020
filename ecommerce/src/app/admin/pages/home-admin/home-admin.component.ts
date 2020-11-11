import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service'
import { Producto } from 'src/app/core/models/productos'
import { Inventario } from 'src/app/core/models/inventario'

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.css']
})
export class HomeAdminComponent implements OnInit {
  productos: Producto[]
  invetarios: Inventario[]
  total: Inventario = {
    id: 0,
    nombre: 'Total',
    ventastotales: 0,
    cantidad: 0,
    stock: 0
  }

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    // this.apiService.getProduct().then((res: any) => {
    //   this.productos = res
    // })
    this.apiService.getInventario().then((res: any) => {
      this.invetarios = res
      this.sumProduct()
    })
  }
  sumProduct () {
    for (let i=0; i< this.invetarios.length; i++) {
      this.total.ventastotales += this.invetarios[i].ventastotales
      this.total.cantidad += this.invetarios[i].cantidad
      this.total.stock += this.invetarios[i].stock
    }
  }
}
