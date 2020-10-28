/**
 * Es mala practica tener una linea muy larga
 * lo ideal es que cuando importes muchas cosas hacer una separacion uno a uno
 * de lo que se va requiriendo
 */
// import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges, DoCheck, OnDestroy  } from '@angular/core';
import { 
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  DoCheck,
  OnDestroy  } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnChanges, OnInit, DoCheck, OnDestroy {
  // product = {
  //   id: 1,
  //   image: 'assets/images/camiseta.png',
  //   title: 'Camisa',
  //   price: 80,
  //   description: 'bla bla bla bla'
  // }

  @Input() product: any
  @Output() clickAddToCart = new EventEmitter<any>()
  /* Se ejecuta al crearse el componente*/
  constructor() { 
    console.log('1. constructro')
  }
  /**
   * Es la forma mas recomendada para detectar cambios en nuestros componentes
   * y se ejecuta antes del ngInit
   * Recibe un parametro que es de un tipo de datos muy espesifico donde te muestra
   * que valores tenia antes y cuales son los nuevos valores.
   */
  ngOnChanges(changes: SimpleChanges): void {
    console.log('2. onChange')
    console.log(changes)
  }
  /**
   * Este es el mejor lugar para hacer las consultas a una api
   */
  ngOnInit(): void {
    console.log('3. onInit')
  }
  /**
   * Cousa conflicto con ngOnChages ya que hacen lo mismo
   * ngOnChage es la forma mas recomendada para detectar cambios
   * solo que doCkeck es una forma mas forsosa y trabaja diferentes.
   */
  ngDoCheck() {
    console.log('4. doCheck')
  }
  /**
   * Es muy util y una buena practica remover los componentes cuando se hace desuscripciones
   * de memoria y se remueven los componenetes.
   */
  ngOnDestroy () {
    console.log('5. onDestroy')
  }
  addCart() {
    this.clickAddToCart.emit(this.product.id)
  }

}
