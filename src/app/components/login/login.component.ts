import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  email = '';
  contrasena = '';

  constructor(public afAuth: AngularFireAuth, private router: Router) {
    this.logout();
    this.afAuth.authState.subscribe( user => {
      if (!user) {
        return true;
      } else if (user.email !== '') {
        this.router.navigate(['/registrar']);
      }
    });
  }

  ngOnInit() {
  }

  login(correo, pass) {
    this.afAuth.auth.signInWithEmailAndPassword(correo, pass).catch(login => {
      console.log('Iniciando');
    });
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  ingresar() {
    this.login(this.email, this.contrasena);
  }

}
