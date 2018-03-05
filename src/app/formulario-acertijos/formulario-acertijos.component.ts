import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Acertijo } from '../modelos/acertijo';
import { AcertijosService } from '../servicios/acertijos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-formulario-acertijos',
  templateUrl: './formulario-acertijos.component.html',
  styleUrls: ['./formulario-acertijos.component.css']
})
export class FormularioAcertijosComponent implements OnInit {

  ngOnInit() {
  }

  private nombre:string="";
  private contenido:string="";
  private respuesta:string="";
  private autor:string="";
  private acertijo:Acertijo;

  private catalogo:Observable<Acertijo[]>;
  
  constructor(private router: Router,public snackBar: MatSnackBar,
    activatedRoute: ActivatedRoute,private servicio:AcertijosService) {
    this.catalogo = this.servicio.getCatalogo();
   }
 

  crearAcertijo() {
    
    this.acertijo = new Acertijo(this.nombre, this.contenido, this.respuesta,this.autor);
    if(this.acertijo.nombre =="" || this.acertijo.contenido=="" ||
       this.acertijo.autor =="" || this.acertijo.respuesta=="" ){

        console.log("Alguno de los datos a introducir es nulo");
        let snackBarRef = this.snackBar.open('Usted debe rellenar todos los campos !!', 'Ocultar', {
          duration: 3000
        });
        
       }else{
        console.log("datos: "+this.acertijo );
        this.servicio.insertarAcertijo(this.acertijo);
        this.router.navigate(['/catalogo']); 
       }
    }

   



}
