import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase/app';
import {Router} from '@angular/router';
import { DatosService } from '../../providers/datos.service';
import { Datos } from '../../interface/datos.interface';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styles: []
})
export class RegistrarComponent implements OnInit {

  nombre = '';
  cocacola = 0;
  sprite = 0;
  fanta = 0;
  ciel = 0;
  sidral = 0;
  delvalle = 0;
  fuze = 0;
  powerade = 0;
  glaceau = 0;
  limon = 0;
  naranja = 0;
  santaclara = 0;
  fresca = 0;
  ades = 0;
  fecha = '06/07/2018';
  distritos = '';
  distrito = '';
  usuario: any = {};
  advertencia = true;
  guardado = false;

  constructor(public _ds: DatosService, public afAuth: AngularFireAuth, private router: Router) {
    this.advertencia = true;
    this.guardado = false;
    this.afAuth.authState.subscribe( user => {
      if (!user) {
        this.router.navigate(['/login']);
      } else {
        this.usuario.uid = user.uid;
      }
    });
  }

  ngOnInit() {
  }

  limpiar() {
    this.nombre = '';
    this.cocacola = 0;
    this.sprite = 0;
    this.fanta = 0;
    this.ciel = 0;
    this.sidral = 0;
    this.delvalle = 0;
    this.fuze = 0;
    this.powerade = 0;
    this.glaceau = 0;
    this.limon = 0;
    this.naranja = 0;
    this.santaclara = 0;
    this.fresca = 0;
    this.ades = 0;
    this.distritos = '';
    this.distrito = '';
  }

  guardarDatos() {
    const dato: Datos = {
      uid: this.usuario.uid,
      tiempo: new Date().getTime(),
      nombre: this.nombre,
      fecha: this.fecha,
      lugar: this.distrito,
      cocacola: this.cocacola,
      sprite: this.sprite,
      fanta: this.fanta,
      ciel: this.ciel,
      sidral: this.sidral,
      delvalle: this.delvalle,
      fuze: this.fuze,
      powerade: this.powerade,
      glaceau: this.glaceau,
      limon: this.limon,
      naranja: this.naranja,
      santaclara: this.santaclara,
      fresca: this.fresca,
      ades: this.ades
    };

    this._ds.agregarDato(dato);
    this.limpiar();
    this.notificacion();
  }

  obtenerSeleccion() {
    this.distrito = this.distritos;
  }

  notificacion() {
    this.advertencia = false;
    this.guardado = true;
  }

}
