import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase/app';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {

  public usuario: any = {};

  constructor(public afAuth: AngularFireAuth, private router: Router) {
    this.afAuth.authState.subscribe( user => {
      if (!user) {
        this.usuario = {};
        this.router.navigate(['/login']);
      } else {
        this.usuario.displayname = user.displayName;
        this.usuario.uid = user.uid;
      }
    });
  }

  ngOnInit() {
  }

  logout() {
    this.usuario = {};
  }

}
