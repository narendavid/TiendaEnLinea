import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from '../../servicios/usuarios.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-bodega',
  templateUrl: './bodega.component.html',
  styleUrls: ['./bodega.component.css']
})
export class BodegaComponent implements OnInit {

  productos: Observable<any[]>;

  constructor(db: AngularFirestore, private router: Router, private usuario: UsuariosService) {
    this.productos = db.collection('productos').valueChanges();
    this.usuario.isLogged ? this.router.navigate(['']) : console.log('debe iniciar sesion');
  }

  ngOnInit() {
  }

}
