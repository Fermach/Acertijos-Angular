import { CdkTableModule} from '@angular/cdk/table';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase} from 'angularfire2/database';
import { platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { DetalleAcertijoComponent } from './detalle-acertijo/detalle-acertijo.component';
import { MasInfoComponent } from './mas-info/mas-info.component';
import { ActualizarAcertijoComponent } from './actualizar-acertijo/actualizar-acertijo.component';
import { AppComponent } from './app.component';
import { ListaAcertijosComponent } from './lista-acertijos/lista-acertijos.component';
import { FormularioAcertijosComponent } from './formulario-acertijos/formulario-acertijos.component';
import { ReactiveFormsModule} from '@angular/forms';
import { AcertijosService } from './servicios/acertijos.service';
import { routing } from './app.routing';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
} from '@angular/material';


var config = {
  apiKey: "AIzaSyB-pgYuyOtq_4vjpK3u46siKa_fyN7opc8",
  authDomain: "acertijosangular.firebaseapp.com",
  databaseURL: "https://acertijosangular.firebaseio.com",
  projectId: "acertijosangular",
  storageBucket: "acertijosangular.appspot.com",
  messagingSenderId: "433272247806"
};

@NgModule({
  exports: [
    CdkTableModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
  ],
  declarations: [DetalleAcertijoComponent, MasInfoComponent]
})
export class DemoMaterialModule {}

@NgModule({
  declarations: [
    AppComponent,
    ListaAcertijosComponent,
    FormularioAcertijosComponent,
    ActualizarAcertijoComponent
  ],
  imports: [
    DemoMaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCardModule,
    MatMenuModule,
    BrowserModule,
    FormsModule, 
    routing, 
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule
  ],
  providers: [AcertijosService,AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }


platformBrowserDynamic().bootstrapModule(AppModule);
