// listar-cafe.component.ts
import { Component, OnInit } from '@angular/core';
import { CafeService } from '../cafe.service';
import { Cafe } from '../cafe';

@Component({
  selector: 'app-listar-cafe',
  templateUrl: './listar-cafe.component.html',
  styleUrls: ['./listar-cafe.component.css']
})
export class ListarCafeComponent implements OnInit {
  cafes: Cafe[] = [];
  origenCount: number = 0;
  blendCount: number = 0;

  constructor(private cafeService: CafeService) { }

  ngOnInit(): void {
    this.cafeService.getCafes().subscribe(data => {
      this.cafes = data;
      this.countCafeTypes();
    });
  }

  countCafeTypes(): void {
    this.origenCount = this.cafes.filter(cafe => cafe.tipo === 'Café de Origen').length;
    this.blendCount = this.cafes.filter(cafe => cafe.tipo === 'Blend').length;
  }
}
