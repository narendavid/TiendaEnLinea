import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from '../../servicios/usuarios.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private router: Router, private usuarioService: UsuariosService) {
    if (!this.usuarioService.isLogged) {
      this.router.navigate([''])
      console.log('debe iniciar sesion');
    }
  }

  ngOnInit() {
  }

  logout() {
    this.usuarioService.logout();
    this.usuarioService.isLogged = false;
    this.router.navigate(['']);
  }

}
