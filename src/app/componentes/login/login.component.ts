import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from '../../servicios/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  pass: string;

  constructor(private router: Router, private usuario: UsuariosService) {
    if (this.usuario.isLogged){
      this.router.navigate(['main']) 
    }else{
      console.log('debe iniciar sesion');
    }
  }

  ngOnInit() {
  }

  loginGoogle(): void {
    this.usuario.loginGoogle().then((res) => {
      console.log('Respuesta', res);
      this.loginRedirect()
    }).catch(err => console.log('error: ', err));

  }

  login(email, pass): void {
    this.usuario.loginEmailPass(email, pass).then((res) => {
      console.log('Respuesta', res);
      this.loginRedirect();
    }).catch(err => console.log('error: ', err));
  }

  loginRedirect(){
    this.router.navigate(['main']);
  }

}
