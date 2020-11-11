import { Component, OnInit, Input } from '@angular/core';
import { Producto } from 'src/app/core/models/productos'

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  @Input() product: Producto;
  constructor() { }

  ngOnInit(): void {
  }

}
