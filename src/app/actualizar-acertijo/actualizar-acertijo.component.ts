import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { AcertijosService } from '../servicios/acertijos.service';
import { Acertijo } from '../modelos/acertijo';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-actualizar-acertijo',
  templateUrl: './actualizar-acertijo.component.html',
  styleUrls: ['./actualizar-acertijo.component.css']
})
export class ActualizarAcertijoComponent implements OnInit {

  ngOnInit() {
  }

  acertijo:Acertijo;
  nuevoAcertijo: Acertijo;
  catalogo:Observable<Acertijo[]>;
  nombre:string;
  contenido:string;
  respuesta:string;
  autor:string;
  key:string ;


  constructor(private router: Router,public snackBar: MatSnackBar,
    activatedRoute: ActivatedRoute,private servicio:AcertijosService) {
    this.catalogo = this.servicio.getCatalogo();

    this.key = activatedRoute.snapshot.params['key'];
    console.log(this.key);
    servicio.obtenerAcertijo(this.key).subscribe(acertijo => {
      this.acertijo=acertijo;
      this.nombre = acertijo.nombre;
      this.contenido = acertijo.contenido;
      this.respuesta = acertijo.respuesta;
      this.autor = acertijo.autor;
    })

   }

  actualizarAcertijo() {
    console.log("hola");
    this.nuevoAcertijo = new Acertijo(this.nombre, this.contenido, this.respuesta,this.autor);
    console.log(this.nuevoAcertijo.nombre);
    
    if(this.nuevoAcertijo.nombre =="" || this.nuevoAcertijo.contenido=="" ||
       this.nuevoAcertijo.autor =="" || this.nuevoAcertijo.respuesta=="" ){

        console.log("Alguno de los datos a introducir es nulo");
        let snackBarRef = this.snackBar.open('Usted debe rellenar todos los campos !!', 'Ocultar', {
          duration: 3000
        });
        
       }else{
        console.log("datos: "+this.nuevoAcertijo );
        this.servicio.actualizaAcertijo(this.nuevoAcertijo, this.key);
        this.router.navigate(['/catalogo']); 
       }
    }


}
