import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() { }
  auth () {
    return new Promise((resolve, rejects) => {
      let token = localStorage.getItem('token') 
      if (!token) {
        rejects(false)
      }
      resolve(true)
    })
  }
}
