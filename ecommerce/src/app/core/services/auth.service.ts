import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() {
    
  }
  auth () {
    return new Promise((resolve, rejects) => {
      const now = Math.floor((new Date).getTime() / 1000)
      let token = localStorage.getItem('token') 
      let decode
      if (!token) {
        rejects(false)
      }
      decode = jwt_decode(token)
      if (now >= decode.ext) {
        localStorage.clear()
        rejects(false)
      }
      resolve(true)
    })
  }
}
