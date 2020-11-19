import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';

import { Producto } from '../models/productos'
import { CompraProducto } from '../models/compraProducto'

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private subject: BehaviorSubject<CompraProducto[]> = new BehaviorSubject([]);
  private totalSubject: BehaviorSubject<any> = new BehaviorSubject({total: 0, count: 0})
  private itemsCarrito: CompraProducto[] = [];
  private totalCarrito: any
  private compraIndex: number

  constructor() {
    this.subject.subscribe(data => this.itemsCarrito = data);
    this.totalSubject.subscribe(data => this.totalCarrito = data)
  }
  /**
   * addCarrito
   * @param producto
   */
  addCarrito(producto: Producto) {
    this.compraIndex = null
    this.compraIndex = this.itemsCarrito.findIndex(compra => compra.producto.idproducto === producto.idproducto )
    if (this.compraIndex === -1) {
      this.subject.next([...this.itemsCarrito, { producto, cantidad: 1, costo: producto.precio }])
    } else {
      this.itemsCarrito[this.compraIndex].cantidad++
      this.itemsCarrito[this.compraIndex].costo += producto.precio
      this.subject.next([...this.itemsCarrito])
    }
    this.totalCarrito.count++
    this.totalCarrito.total += producto.precio
    this.totalSubject.next(this.totalCarrito)
  }

  /**
   * clearCarrito
   */
  clearCarrito() {
    this.subject.next(null);
    this.totalSubject.next({total: 0, count: 0})
  }

  /**
   * getCarrito
   */
  getCarrito(): Observable<CompraProducto[]> {
    return this.subject;
  }
  getTotalCarrito(): Observable<any> {
    return this.totalSubject
  }
}
