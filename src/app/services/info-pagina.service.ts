import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargado = false;

  equipo: any[] = [];

  constructor( private http: HttpClient ) {
    // console.log('Servicio de info pagina');
    this.cargarInfo();
    this.cargarEquipo();
  }

  private cargarInfo() {
    // Leer el archivo JSON
    this.http.get('assets/data/data-pagina.json')
      .subscribe((resp: InfoPagina) => {

        this.cargado = true;
        this.info = resp;

      });
  }

  private cargarEquipo() {

    // Leer archivo Json de firebase
    this.http.get('https://angular-html-754de.firebaseio.com/equipo.json')
      .subscribe( (resp: any[]) => {

        this.equipo = resp;
        // console.log(resp);

      } );
  }

}
