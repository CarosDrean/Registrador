import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase/app';
import {Router} from '@angular/router';
import { DatosService } from '../../providers/datos.service';

@Component({
  selector: 'app-graficos',
  templateUrl: './graficos.component.html',
  styles: []
})
export class GraficosComponent implements OnInit {

  constructor(public afAuth: AngularFireAuth, private router: Router, public _ds: DatosService) {
    this._ds.cargarDatos().subscribe( data => {
      this.rellenar();
    });
    this.afAuth.authState.subscribe( user => {
      if (!user) {
        this.router.navigate(['/login']);
      }
    });
  }

  ngOnInit() {
  }

  rellenar() {
    this.pieChartData = [
      this._ds.one[0], this._ds.one[1], this._ds.one[2], this._ds.one[3],
      this._ds.one[4], this._ds.one[5], this._ds.one[6], this._ds.one[7]];

    this.pieChartData2 = [
      this._ds.two[0], this._ds.two[1], this._ds.two[2], this._ds.two[3],
      this._ds.two[4], this._ds.two[5], this._ds.two[6], this._ds.two[7]];

    this.lineChartData = [
      {data: [
        this._ds.datosTi.cocacola, this._ds.datosAq.cocacola, this._ds.datosOc.cocacola,
        this._ds.datosPc.cocacola, this._ds.datosPar.cocacola, this._ds.datosPun.cocacola,
        this._ds.datosGu.cocacola, this._ds.datosMo.cocacola], label: 'Coca Cola'},
      {data: [
        this._ds.datosTi.sprite, this._ds.datosAq.sprite, this._ds.datosOc.sprite,
        this._ds.datosPc.sprite, this._ds.datosPar.sprite, this._ds.datosPun.sprite,
        this._ds.datosGu.sprite, this._ds.datosMo.sprite], label: 'Sprite'},
      {data: [
        this._ds.datosTi.fanta, this._ds.datosAq.fanta, this._ds.datosOc.fanta,
        this._ds.datosPc.fanta, this._ds.datosPar.fanta, this._ds.datosPun.fanta,
        this._ds.datosGu.fanta, this._ds.datosMo.fanta], label: 'Fanta'}];

    this.lineChartData2 = [
      {data: [
        this._ds.datosTi.cocacola, this._ds.datosAq.cocacola, this._ds.datosOc.cocacola,
        this._ds.datosPc.cocacola, this._ds.datosPar.cocacola, this._ds.datosPun.cocacola,
        this._ds.datosGu.cocacola, this._ds.datosMo.cocacola], label: 'Siel'},
      {data: [
        this._ds.datosTi.sprite, this._ds.datosAq.sprite, this._ds.datosOc.sprite,
        this._ds.datosPc.sprite, this._ds.datosPar.sprite, this._ds.datosPun.sprite,
        this._ds.datosGu.sprite, this._ds.datosMo.sprite], label: 'Sidral'},
      {data: [
        this._ds.datosTi.fanta, this._ds.datosAq.fanta, this._ds.datosOc.fanta,
        this._ds.datosPc.fanta, this._ds.datosPar.fanta, this._ds.datosPun.fanta,
        this._ds.datosGu.fanta, this._ds.datosMo.fanta], label: 'Del Valle'},
      {data: [
        this._ds.datosTi.cocacola, this._ds.datosAq.cocacola, this._ds.datosOc.cocacola,
        this._ds.datosPc.cocacola, this._ds.datosPar.cocacola, this._ds.datosPun.cocacola,
        this._ds.datosGu.cocacola, this._ds.datosMo.cocacola], label: 'Fuze'},
      {data: [
        this._ds.datosTi.sprite, this._ds.datosAq.sprite, this._ds.datosOc.sprite,
        this._ds.datosPc.sprite, this._ds.datosPar.sprite, this._ds.datosPun.sprite,
        this._ds.datosGu.sprite, this._ds.datosMo.sprite], label: 'Powerade'},
      {data: [
        this._ds.datosTi.fanta, this._ds.datosAq.fanta, this._ds.datosOc.fanta,
        this._ds.datosPc.fanta, this._ds.datosPar.fanta, this._ds.datosPun.fanta,
        this._ds.datosGu.fanta, this._ds.datosMo.fanta], label: 'Glaceau'},
      {data: [
        this._ds.datosTi.cocacola, this._ds.datosAq.cocacola, this._ds.datosOc.cocacola,
        this._ds.datosPc.cocacola, this._ds.datosPar.cocacola, this._ds.datosPun.cocacola,
        this._ds.datosGu.cocacola, this._ds.datosMo.cocacola], label: 'Limon'},
      {data: [
        this._ds.datosTi.sprite, this._ds.datosAq.sprite, this._ds.datosOc.sprite,
        this._ds.datosPc.sprite, this._ds.datosPar.sprite, this._ds.datosPun.sprite,
        this._ds.datosGu.sprite, this._ds.datosMo.sprite], label: 'Naranja'},
      {data: [
        this._ds.datosTi.fanta, this._ds.datosAq.fanta, this._ds.datosOc.fanta,
        this._ds.datosPc.fanta, this._ds.datosPar.fanta, this._ds.datosPun.fanta,
        this._ds.datosGu.fanta, this._ds.datosMo.fanta], label: 'Santa Clara'},
      {data: [
        this._ds.datosTi.sprite, this._ds.datosAq.sprite, this._ds.datosOc.sprite,
        this._ds.datosPc.sprite, this._ds.datosPar.sprite, this._ds.datosPun.sprite,
        this._ds.datosGu.sprite, this._ds.datosMo.sprite], label: 'Fresca'},
      {data: [
        this._ds.datosTi.fanta, this._ds.datosAq.fanta, this._ds.datosOc.fanta,
        this._ds.datosPc.fanta, this._ds.datosPar.fanta, this._ds.datosPun.fanta,
        this._ds.datosGu.fanta, this._ds.datosMo.fanta], label: 'Ades'}];
  }

  // lineChart

  // tslint:disable-next-line:member-ordering
  public lineChartData: Array<any> = [
    {data: [28, 48, 40, 19, 86, 27, 90, 60], label: 'Coca Cola'},
    {data: [28, 48, 40, 19, 86, 27, 90, 60], label: 'Sprite'},
    {data: [18, 48, 77, 9, 100, 27, 40, 100], label: 'Fanta'}
  ];

  // tslint:disable-next-line:member-ordering
  public lineChartData2: Array<any> = [
    {data: [28, 48, 40, 19, 86, 27, 90, 60], label: 'Siel'},
    {data: [28, 48, 40, 19, 86, 27, 90, 60], label: 'Sidral'},
    {data: [18, 48, 77, 9, 100, 27, 40, 100], label: 'Del Valle'},
    {data: [28, 48, 40, 19, 86, 27, 90, 60], label: 'Fuze'},
    {data: [28, 48, 40, 19, 86, 27, 90, 60], label: 'Powerade'},
    {data: [18, 48, 77, 9, 100, 27, 40, 100], label: 'Glaceau'},
    {data: [28, 48, 40, 19, 86, 27, 90, 60], label: 'Limon'},
    {data: [28, 48, 40, 19, 86, 27, 90, 60], label: 'Naranja'},
    {data: [18, 48, 77, 9, 100, 27, 40, 100], label: 'Santa Clara'},
    {data: [28, 48, 40, 19, 86, 27, 90, 60], label: 'Fresca'},
    {data: [18, 48, 77, 9, 100, 27, 40, 100], label: 'Ades'}
  ];

  // tslint:disable-next-line:member-ordering
  public lineChartLabels: Array<any> = [
    'La Tinguiña', 'Los Aquijes', 'Ocucaje', 'Pachacutec', 'Parcona', 'Pueblo Nuevo', 'Salas Guadalupe', 'Los Molinos'];
  // tslint:disable-next-line:member-ordering
  public lineChartOptions: any = {
    responsive: true
  };
  // tslint:disable-next-line:member-ordering
  public lineChartColors: Array<any> = [];
  // tslint:disable-next-line:member-ordering
  public lineChartLegend = true;
  // tslint:disable-next-line:member-ordering
  public lineChartType = 'line';
  public randomize(): void {
    const _lineChartData: Array<any> = new Array(this.lineChartData.length);
    for (let i = 0; i < this.lineChartData.length; i++) {
      _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
      }
    }
    this.lineChartData = _lineChartData;
  }
  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  // tslint:disable-next-line:member-ordering
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  // tslint:disable-next-line:member-ordering
  public barChartLabels: string[] = [
    'La Tinguiña', 'Los Aquijes', 'Ocucaje', 'Pachacutec', 'Parcona', 'Pueblo Nuevo', 'Salas Guadalupe', 'Los Molinos'];
  // tslint:disable-next-line:member-ordering
  public barChartType = 'bar';
  // tslint:disable-next-line:member-ordering
  public barChartLegend = true;

  // tslint:disable-next-line:member-ordering
  public barChartData: any[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Coca Cola'},
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Sprite'},
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Fanta'}
  ];

  // tslint:disable-next-line:member-ordering
  public pieChartLabels: string[] = [
    'La Tinguiña', 'Los Aquijes', 'Ocucaje', 'Pachacutec', 'Parcona', 'Pueblo Nuevo', 'Salas Guadalupe', 'Los Molinos'
  ];
  // tslint:disable-next-line:member-ordering
  public pieChartData: number[] = [300, 500, 100, 300, 500, 100, 500, 100];
  // tslint:disable-next-line:member-ordering
  public pieChartData2: number[] = [300, 500, 100, 300, 500, 100, 500, 100];
  // tslint:disable-next-line:member-ordering
  public pieChartType = 'pie';

  // events
  public chartClickedr(e: any): void {
    console.log(e);
  }

  public chartHoveredr(e: any): void {
    console.log(e);
  }

  public randomizer(): void {
    // Only Change 3 values
    const data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40];
    const clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;
    /**
     * (My guess), for Angular to recognize the change in the dataset
     * it has to change the dataset variable directly,
     * so one way around it, is to clone the data, change it and then
     * assign it;
     */
  }

}
