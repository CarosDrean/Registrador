import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase/app';
import {Router} from '@angular/router';
import { DatosService } from '../../providers/datos.service';
import { Datos } from '../../interface/datos.interface';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styles: []
})
export class DatosComponent implements OnInit {

  public items: Observable<any[]>;
  // tslint:disable-next-line:max-line-length
  public lugares = ['La Tinguiña', 'Los Aquijes', 'Ocucaje', 'Pachacutec' , 'Parcona', 'Pueblo Nuevo', 'Salas Guadalupe', 'San Jose de los Molinos'];

  constructor(public _ds: DatosService, public afAuth: AngularFireAuth, private router: Router) {
    this._ds.cargarDatos().subscribe();

    this.afAuth.authState.subscribe( user => {
      if (!user) {
        this.router.navigate(['/login']);
      }
    });
  }

  ngOnInit() {
  }

}
