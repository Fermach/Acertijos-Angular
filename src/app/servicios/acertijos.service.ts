import { Injectable } from '@angular/core';
import { Acertijo } from '../modelos/acertijo';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { AngularFireObject } from 'angularfire2/database/interfaces';

@Injectable()
export class AcertijosService {

    private acertijo:AngularFireObject<Acertijo>;
    private catalogoRef:AngularFireList<any>;
    private catalogo: Observable<Acertijo[]>;

    constructor(private db: AngularFireDatabase) {
        //this.mock();
        this.catalogoRef = this.db.list<Acertijo>('/acertijos');
        
    }

    mock() {
      //  let acertijo:Acertijo = new Acertijo('Caminando','Por la calle va caminando un animal, y su nombre ya te lo he dicho',"Vaca","Fermach");
      //  let acertijo1:Acertijo = new Acertijo('Nombre1', '¿Qué animal tiene en su nombre las cinco vocales?','Murcielago', 'Fermach');
      //  this.catalogoRef.push(acertijo);
      //  this.catalogoRef.push(acertijo1);
    }

    getCatalogo() {
        return this.catalogoRef.snapshotChanges().map((arr) => { 
                        return arr.map((acertijo) => Object.assign(acertijo.payload.val(), { key: acertijo.key }) );      
                     });
    }

    insertarAcertijo(acertijo:Acertijo) {
        this.catalogoRef.push(acertijo);

    }

    obtenerAcertijo(key:string): Observable<Acertijo>{
        return this.db.object<Acertijo>('acertijos/'+key).valueChanges();  
    }

    actualizaAcertijo(acertijo:Acertijo, key:string) {
        console.log("key: "+ key);
        this.catalogoRef.update(key, acertijo);     }  
    
    eliminarAcertijo(acertijo:Acertijo) {    
    
        this.catalogoRef.remove(acertijo.key);     }


}