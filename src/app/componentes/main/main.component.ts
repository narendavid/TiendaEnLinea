import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from '../../servicios/usuarios.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private router: Router, private usuario: UsuariosService) {
    this.router.navigate(['main/bodega']);
    if (this.usuario.isLogged){
      this.router.navigate(['']) 
    }else{
      console.log('debe iniciar sesion');
    }
  }

  ngOnInit() {
  }

  logout(){
    this.usuario.logout();
    this.router.navigate(['']);
  }

}
