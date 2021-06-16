import { Component, OnInit } from '@angular/core';
import { Empresas } from '../../models/empresas';
import { EmpresasService } from '../../servicies/empresas.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.css']
})
export class EmpresasComponent implements OnInit {
  Titulo = 'Empresas';
  TituloAccionABMC = {
    A: '(Agregar)',
    B: '(Eliminar)',
    M: '(Modificar)',
    C: '(Consultar)',
    L: '(Listado)'
  };
  AccionABMC = 'L'; // inicialmente inicia en el listado de articulos (buscar con parametros)
  Mensajes = {
    SD: ' No se encontraron registros...',
    RD: ' Revisar los datos ingresados...'
  };
  constructor(private empresasService: EmpresasService) {}
  Items: Empresas[] = null;
  ngOnInit() {
    this.GetFamiliasArticulos();
  }
  FormBusqueda: FormGroup;
  FormRegistro: FormGroup;

  GetFamiliasArticulos() {
    this.empresasService.get().subscribe((res: Empresas[]) => {
      this.Items = res;
    });
  }
  submitted: boolean = false;
  Agregar() {
    this.AccionABMC = 'A';
    this.FormRegistro.reset({ Activo: true, IdArticulo: 0 });
    this.submitted = false;
    this.FormRegistro.markAsUntouched();
  }
  Grabar() {
    if (this.FormRegistro.invalid) {
      return;
    }
  }
  Volver() {
    this.AccionABMC = 'L';
  }
  Buscar() {
    //this.modalDialogService.BloquearPantalla();
    this.empresasService
      .get(this.FormBusqueda.value.RazonSocial, this.FormBusqueda.value.Activo, this.Pagina)
      .subscribe((res: any) => {
        this.Items = res.Items;
        this.RegistrosTotal = res.RegistrosTotal;
        this.modalDialogService.DesbloquearPantalla();
      });
}
