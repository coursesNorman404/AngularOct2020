import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service'
import { Categoria } from 'src/app/core/models/categoria'
import { Producto } from 'src/app/core/models/productos'

@Component({
  selector: 'app-home-vendedor',
  templateUrl: './home-vendedor.component.html',
  styleUrls: ['./home-vendedor.component.css']
})
export class HomeVendedorComponent implements OnInit {
  categorias: Categoria[]
  productos: Producto[]
  filter: string = ''

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getCategorias().then((res: any) => {
      this.categorias = res
    })
    this.apiService.getProduct().then((res: any) => {
      this.productos = res
    })
  }
  filterProduct() {
    this.apiService.getProductFilter(this.filter).then((res: any) => {
      this.productos = res
    })
  }
  filterDelete() {
    this.apiService.getProduct().then((res: any) => {
      this.productos = res
      this.filter = ''
    })
  }

}
