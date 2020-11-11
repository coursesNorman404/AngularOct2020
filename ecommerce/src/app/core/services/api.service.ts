import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API = 'https://curso.tgconsulting.online/minipos/api'
  token = ''
  constructor(private http: HttpClient) {
    this.token = localStorage.getItem('token')
  }
  async getCategorias () {
    // return this.categorys
    return this.http.get(`${this.API}/categoria`, {headers: new HttpHeaders().set('Authorization', `Bearer ${this.token}`)}).toPromise()
  }
  getProduct () {
    return this.http.get(`${this.API}/producto`, {headers: new HttpHeaders().set('Authorization', `Bearer ${this.token}`)}).toPromise()
  }
  getProductFilter (filter: string) {
    return this.http.get(`${this.API}/producto/busqueda/${filter}`, {headers: new HttpHeaders().set('Authorization', `Bearer ${this.token}`)}).toPromise()
  }
  getProductById (id: number) {
    return this.http.get(`${this.API}/producto/${id}`, {headers: new HttpHeaders().set('Authorization', `Bearer ${this.token}`)}).toPromise()
  }
  getInventario() {
    return this.http.get(`${this.API}/compra/inventario`, {headers: new HttpHeaders().set('Authorization', `Bearer ${this.token}`)}).toPromise()
  }
}
