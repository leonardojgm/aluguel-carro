import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FiltrarVeiculo } from './filtro-carro';
import { AppComponent } from './app.component';
import { registerLocaleData } from '@angular/common';
import ptBr from "@angular/common/locales/pt";

registerLocaleData(ptBr);

@NgModule({
  declarations: [
    AppComponent,
    FiltrarVeiculo
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'pt' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
