import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from '../../servicios/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario = {
    email: '',
    pass: ''
  }

  error: boolean;

  constructor(private router: Router, private usuarioService: UsuariosService) {
    console.log(this.usuarioService.isLogged);
    
    if (this.usuarioService.isLogged) {
      this.router.navigate(['main']);
    } else {
      console.log('debe iniciar sesion');
    }
  }

  ngOnInit() {
  }

  loginGoogle(): void {
    this.usuarioService.loginGoogle().then((res) => {
      console.log('Respuesta', res);
      this.loginRedirect()
    }).catch(err => console.log('error: ', err));

  }

  login(email, pass): void {
    this.usuarioService.loginEmailPass(email, pass).then((res) => {
      console.log('Respuesta', res);
      this.usuarioService.isLogged = true;
      this.error = false;
      this.loginRedirect();
    }).catch(err => {
      console.log('error: ', err);
      this.error = true;
    });
  }

  loginRedirect() {
    this.router.navigate(['main']);
  }

}
