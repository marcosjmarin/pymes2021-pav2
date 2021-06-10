import { Component, OnInit } from '@angular/core';
import { ArticuloFamilia } from '../../models/articulo-familia';
import { MockArticulosFamiliasService } from '../../servicies/mock-articulos-familias.service';

@Component({
  selector: 'app-articulos-familias',
  templateUrl: './articulos-familias.component.html',
  styleUrls: ['./articulos-familias.component.css']
})
export class ArticulosFamiliasComponent implements OnInit {
  Items: ArticuloFamilia[] = [];
  Titulo = 'Articulos Familias';

  constructor() {}

  ngOnInit() {}
}
