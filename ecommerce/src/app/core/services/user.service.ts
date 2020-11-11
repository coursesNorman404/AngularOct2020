import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  API = 'https://curso.tgconsulting.online/minipos/api'

  constructor(private http: HttpClient) { }
  login (email, password) {
    return this.http.post(`${this.API}/login`, {username: email, password}).toPromise()
    // return this.http.post(this.API + '/login', {username: email, password})
  }
  logout() {
    localStorage.clear()
  }
}
