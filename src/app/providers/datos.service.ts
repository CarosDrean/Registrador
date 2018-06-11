import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection
} from 'angularfire2/firestore';
import { Datos } from '../interface/datos.interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DatosService {
  public datosT: Datos[] = [];
  public datosA: Datos[] = [];
  public datosO: Datos[] = [];
  public datosP: Datos[] = [];
  public datosPa: Datos[] = [];
  public datosPn: Datos[] = [];
  public datosG: Datos[] = [];
  public datosM: Datos[] = [];

  public datosTi: Datos = this.dato();
  public datosAq: Datos = this.dato();
  public datosOc: Datos = this.dato();
  public datosPc: Datos = this.dato();
  public datosPar: Datos = this.dato();
  public datosPun: Datos = this.dato();
  public datosGu: Datos = this.dato();
  public datosMo: Datos = this.dato();
  // tslint:disable-next-line:max-line-length
  public lugares = [
    'La Tinguiña',
    'Los Aquijes',
    'Ocucaje',
    'Pachacutec',
    'Parcona',
    'Pueblo Nuevo',
    'Salas Guadalupe',
    'San Jose de los Molinos'
  ];

  private itemsCollection: AngularFirestoreCollection<Datos>;

  public datos: Datos[] = [];

  constructor(private afs: AngularFirestore) {
    this.itemsCollection = this.afs.collection<Datos>('registros', ref =>
      ref.orderBy('tiempo', 'asc')
    );
  }

  cargarDatos() {
    this.itemsCollection = this.afs.collection<Datos>('registros', ref =>
      ref.orderBy('tiempo', 'asc')
    );
    return this.itemsCollection.valueChanges().pipe(
      map((datos: Datos[]) => {
        console.log(datos);
        this.datos = datos;
        this.agruparColleciones();
      })
    );
  }

  agregarDato(datos: Datos) {
    return this.itemsCollection.doc(String(datos.tiempo)).set(datos);
  }

  agruparColleciones() {
    // this._ds.datos;
    this.datosT = this.datos.filter(
      (datos: Datos) => datos.lugar === 'La Tinguiña'
    );
    this.datosA = this.datos.filter(
      (datos: Datos) => datos.lugar === 'Los Aquijes'
    );
    this.datosO = this.datos.filter(
      (datos: Datos) => datos.lugar === 'Ocucaje'
    );
    this.datosP = this.datos.filter(
      (datos: Datos) => datos.lugar === 'Pachacutec'
    );
    this.datosPa = this.datos.filter(
      (datos: Datos) => datos.lugar === 'Parcona'
    );
    this.datosPn = this.datos.filter(
      (datos: Datos) => datos.lugar === 'Pueblo Nuevo'
    );
    this.datosG = this.datos.filter(
      (datos: Datos) => datos.lugar === 'Salas Guadalupe'
    );
    this.datosM = this.datos.filter(
      (datos: Datos) => datos.lugar === 'San José de los Molinos'
    );
    this.armarDatos();
    console.log(this.datosPar);
  }

  dato (): Datos {
    const dato: Datos = {
      uid: '',
      tiempo: new Date().getTime(),
      nombre: '',
      fecha: '',
      lugar: '',
      cocacola: 0,
      sprite: 0,
      fanta: 0,
      ciel: 0,
      sidral: 0,
      delvalle: 0,
      fuze: 0,
      powerade: 0,
      glaceau: 0,
      limon: 0,
      naranja: 0,
      santaclara: 0,
      fresca: 0,
      ades: 0
    };
    return dato;
  }

  armarDatos() {
    this.datosTi = this.armarDato(this.datosT);
    this.datosAq = this.armarDato(this.datosA);
    this.datosOc = this.armarDato(this.datosO);
    this.datosPc = this.armarDato(this.datosP);
    this.datosPar = this.armarDato(this.datosPa);
    this.datosPun = this.armarDato(this.datosPn);
    this.datosGu = this.armarDato(this.datosG);
    this.datosMo = this.armarDato(this.datosM);
  }

  armarDato(lista: Datos[]): Datos {
    const dato: Datos = {
      uid: '',
      tiempo: new Date().getTime(),
      nombre: '',
      fecha: '',
      lugar: '',
      cocacola: this.sumar(lista, 'cocacola'),
      sprite: this.sumar(lista, 'sprite'),
      fanta: this.sumar(lista, 'fanta'),
      ciel: this.sumar(lista, 'ciel'),
      sidral: this.sumar(lista, 'sidral'),
      delvalle: this.sumar(lista, 'delvalle'),
      fuze: this.sumar(lista, 'fuze'),
      powerade: this.sumar(lista, 'powerade'),
      glaceau: this.sumar(lista, 'glaceau'),
      limon: this.sumar(lista, 'limon'),
      naranja: this.sumar(lista, 'naranja'),
      santaclara: this.sumar(lista, 'santaclara'),
      fresca: this.sumar(lista, 'fresca'),
      ades: this.sumar(lista, 'ades')
    };
    return dato;
  }

  sumar(lista: Datos[], nombre: string): number {
    // this.datosPa
    let suma = 0;
    switch (nombre) {
      case 'cocacola':
        for (const i of lista) {
          suma += i.cocacola;
        }
        break;
      case 'sprite':
        for (const i of lista) {
          suma += i.sprite;
        }
        break;
      case 'fanta':
        for (const i of lista) {
          suma += i.fanta;
        }
        break;
      case 'ciel':
        for (const i of lista) {
          suma += i.ciel;
        }
        break;
      case 'sidral':
        for (const i of lista) {
          suma += i.sidral;
        }
        break;
      case 'delvalle':
        for (const i of lista) {
          suma += i.delvalle;
        }
        break;
      case 'fuze':
        for (const i of lista) {
          suma += i.fuze;
        }
        break;
      case 'powerade':
        for (const i of lista) {
          suma += i.powerade;
        }
        break;
      case 'glaceau':
        for (const i of lista) {
          suma += i.glaceau;
        }
        break;
      case 'limon':
        for (const i of lista) {
          suma += i.limon;
        }
        break;
      case 'naranja':
        for (const i of lista) {
          suma += i.naranja;
        }
        break;
      case 'santaclara':
        for (const i of lista) {
          suma += i.santaclara;
        }
        break;
      case 'fresca':
        for (const i of lista) {
          suma += i.fresca;
        }
        break;
      case 'ades':
        for (const i of lista) {
          suma += i.ades;
        }
        break;
    }
    return suma;
  }
}
