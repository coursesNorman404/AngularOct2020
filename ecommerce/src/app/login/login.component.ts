/**
 * Es una buena practica separa los paquetes de tercerso de nuestros paquetes
 * lo ideal es que sea por un espacio teniendo al inicio del archivo los paquetes de terceros
 * seguidos por el espacio y luego nuestros paquetes
 */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { UserService } from '../core/services/user.service'


//import { UserService } from 'src/app/core/services/user.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  operacion: string
  email = ''
  password = ''
  nick = ''
  token = ''
  perfil = ''
  /**
   * Se recomienda que cuando van aumentado las injecciones de paquetes
   * hacer una lista de forma vertical
   */
  constructor(
    private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
    this.operacion = 'login'
    /**
     * Obtenemos token de localStorage
     */
    this.token = localStorage.getItem('token')
    this.perfil = localStorage.getItem('perfil')
    /**
     * Validamos que el token exista
     */
    if (this.token !== '') {
      if (this.perfil === 'ADMIN') {
        this.router.navigateByUrl('admin')
      } else {
        //Redirecion
      }
    }
  }
  
  login () {
    if (this.email === '' && this.password === '') {
      alert('Faltan datos')
    } else {
      /**
       * Consultamos a login
       */
      this.userService.login(this.email, this.password)
      .then((res: any) => {
        console.log(res)
        /**
         * Almacenamos token en localStorage
         */
        localStorage.setItem('token', res.token)
        localStorage.setItem('perfil', res.perfil)
        if (res.perfil === 'ADMIN') {
          this.router.navigateByUrl('admin')
        } else {
          this.router.navigateByUrl('')
        }
        // console.log('Entro 2')
      })
      .catch(err => {
        if (err.status === 401) {
          alert("Quien eres??")
        }
      })
      .finally(() => {
        // console.log('Finaliza consulta')
      })
    }
  }
}
