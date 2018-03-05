import { Component, OnInit , Input } from '@angular/core';
import { Acertijo } from '../modelos/acertijo';
import { Observable } from 'rxjs/Observable';
import { AcertijosService } from '../servicios/acertijos.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-lista-acertijos',
  templateUrl: './lista-acertijos.component.html',
  styleUrls: ['./lista-acertijos.component.css']
})
export class ListaAcertijosComponent implements OnInit {

  displayedColumns = ['nombre', 'contenido',  'respuesta',  'autor',  'opciones'];

  ngOnInit() {
  }

  private catalogo:Observable<Acertijo[]>;
 
  constructor(private router: Router,
    activatedRoute: ActivatedRoute, private servicio:AcertijosService) {
    this.catalogo = servicio.getCatalogo();
  }
  verRespuesta(acertijo:Acertijo){
    this.router.navigate(['/acertijoDetalle',acertijo.key]);
  }

  borrar(acertijo:Acertijo){
    this.servicio.eliminarAcertijo(acertijo);

  }

  actualizar(acertijo:Acertijo){
    this.router.navigate(['/acertijoActualizar',acertijo.key]);


  }
}
