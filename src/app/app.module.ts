import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; // Importa HttpClientModule si tu componente hace uso de servicios HTTP
import { AppComponent } from './app.component';
import { ListarCafeComponent } from './cafe/listar-cafe/listar-cafe.component'; // Importa el componente
import { CafeModule } from './cafe/cafe.module'; // Asegúrate de que tu módulo de café esté importado

@NgModule({
  declarations: [
    AppComponent,
    ListarCafeComponent // Declara el componente
  ],
  imports: [
    BrowserModule,
    HttpClientModule, // Asegúrate de que HttpClientModule está importado
    CafeModule // Importa tu módulo de café
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
