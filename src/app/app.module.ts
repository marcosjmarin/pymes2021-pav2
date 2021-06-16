import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import {
  NgbPaginationModule,
  NgbModalModule
} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ArticulosFamiliasComponent } from './components/articulos-familias/articulos-familias.component';
import { MockArticulosFamiliasService } from './servicies/mock-articulos-familias.service';
import { ArticulosFamiliasService } from './servicies/articulos-familias.service';
import { MenuComponent } from './components/menu/menu.component';
import { ArticulosComponent } from './components/articulos/articulos.component';
import { MockArticulosService } from './servicies/mock-articulos.service';
import { ReactiveFormsModule } from '@angular/forms';
import { ArticulosService } from './servicies/articulos.service';
import { ModalDialogComponent } from './components/modal-dialog/modal-dialog.component';
import { ModalDialogService } from './servicies/modal-dialog.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbPaginationModule,
    NgbModalModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/inicio', pathMatch: 'full' },
      { path: 'inicio', component: InicioComponent },
      { path: 'articulosfamilias', component: ArticulosFamiliasComponent },
      { path: 'articulos', component: ArticulosComponent }
    ])
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    InicioComponent,
    ArticulosFamiliasComponent,
    MenuComponent,
    ArticulosComponent,
    ModalDialogComponent
  ],
  bootstrap: [AppComponent],
  providers: [
    MockArticulosFamiliasService,
    ArticulosFamiliasService,
    ModalDialogService,
    { provide: APP_BASE_HREF, useValue: '/' }
  ]
})
export class AppModule {}
