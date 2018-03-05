import { Component, OnInit } from '@angular/core';
import { Acertijo } from '../modelos/acertijo';
import { Router, ActivatedRoute } from '@angular/router';
import { AcertijosService } from '../servicios/acertijos.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-detalle-acertijo',
  templateUrl: './detalle-acertijo.component.html',
  styleUrls: ['./detalle-acertijo.component.css']
})
export class DetalleAcertijoComponent implements OnInit {

  acertijo: Acertijo;
  nombre:string;
  contenido:string;
  respuesta:string;
  autor: string;

  constructor(private router: Router,
    activatedRoute: ActivatedRoute, service: AcertijosService) {
   
    let key = activatedRoute.snapshot.params['key'];
    service.obtenerAcertijo(key).subscribe(acertijo => {
      this.acertijo=acertijo;
      this.nombre = acertijo.nombre;
      this.contenido = acertijo.contenido;
      this.respuesta = acertijo.respuesta;
      this.autor = acertijo.autor;
    })
   console.log(key);
  
  }


  ngOnInit() {
  }

}
