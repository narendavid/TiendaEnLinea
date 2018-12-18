import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  public isLogged: boolean = false;

  constructor(private afAuth: AngularFireAuth) { }

  loginGoogle() {
    return this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider())
  }

  loginEmailPass(email: string, pass: string) {
    return new Promise((res, rej) => {
      this.afAuth.auth.signInWithEmailAndPassword(email, pass)
        .then(userData => res(userData),
          err => rej(err));
    })
  }

  logout() {
    return this.afAuth.auth.signOut()
  }
}
