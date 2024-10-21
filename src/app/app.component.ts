import { Component, OnInit } from '@angular/core';
import { Marca } from '../classes/marca';
import { Modelo } from '../classes/modelo';
import { Tipo } from '../classes/tipo';
import { Cor } from '../classes/cor';
import { Combustivel } from '../classes/combustivel';
import { Veiculo } from '../classes/veiculo';
import { WS_Marcas } from '../webservices/ws_marcas';
import { WS_Modelos } from '../webservices/ws_modelos';
import { WS_Tipos } from '../webservices/ws_tipos';
import { WS_Cores } from '../webservices/ws_cores';
import { WS_Combustiveis } from '../webservices/ws_combustiveis';
import { WS_Veiculos } from '../webservices/ws_veiculos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../css/bootstrap.css', '../css/styles.css'],
  providers: [WS_Marcas, WS_Modelos, WS_Tipos, WS_Cores, WS_Combustiveis, WS_Veiculos]
})
export class AppComponent implements OnInit {
  nomeAplicacao = 'Aluguel de Carro - Versão Angular 17';
  _marcas: Marca[] = [];
  _modelos: Modelo[] = [];
  _tipos: Tipo[] = [];
  _cores: Cor[] = [];
  _combustiveis: Combustivel[] = [];
  _veiculos: Veiculo[] = [];
  validarPlaca = /^[A-Z,a-z]{3}-\d{4}$/;
  numeroPlaca: string = "";
  carroMarca: any;
  carroModelo: any;
  carroPlaca: any;
  carroTipo: any;
  carroCor: any;
  carroAnoModelo: any;
  carroCombustivel: any;
  carroDiaria: any;

  constructor(
    private wsmarcas: WS_Marcas,
    private wsmodelos: WS_Modelos,
    private wstipos: WS_Tipos,
    private wscores: WS_Cores,
    private wscombustiveis: WS_Combustiveis,
    private wsveiculos: WS_Veiculos
  ) {}

  carregarVeiculos() {
    this.wsveiculos.lerVeiculos().subscribe(
      (response: any) => {
        this._veiculos = response.veiculos;
      },
      (error: any) => {
        console.error('Erro ao carregar veículos:', error);
      });
  }

  atualizarPagina() {
    window.location.reload();
  }

  ngOnInit(): void {
    this.wsmarcas.lerMarcas().subscribe(
      (response: any) => {
        this._marcas = response.marcas;
      },
      (error: any) => {
        console.error('Erro ao carregar marcas:', error);
      });
    this.wsmodelos.lerModelos().subscribe(
      (response: any) => {
        this._modelos = response.modelos;
      },
      (error: any) => {
        console.error('Erro ao carregar modelos:', error);
      });
    this.wstipos.lerTipos().subscribe(
      (response: any) => {
        this._tipos = response.tipos;
      },
      (error: any) => {
        console.error('Erro ao carregar tipos:', error);
      });
    this.wscores.lerCores().subscribe(
      (response: any) => {
        this._cores = response.cores;
      },
      (error: any) => {
        console.error('Erro ao carregar veículos:', error);
      });
    this.wscombustiveis.lerCombustiveis().subscribe(
      (response: any) => {
        this._combustiveis = response.combustiveis;
      },
      (error: any) => {
        console.error('Erro ao carregar combustiveis:', error);
      });
    this.carregarVeiculos();
  }

  async adicionarCarro(
    carroMarca: any,
    carroModelo: any,
    carroPlaca: any,
    carroTipo: any,
    carroCor: any,
    carroAnoModelo: any,
    carroCombustivel: any,
    carroDiaria: any
  ) {
    let carro = {
      marca: carroMarca,
      modelo: carroModelo,
      placa: carroPlaca,
      tipo: carroTipo,
      cor: carroCor,
      ano_modelo: carroAnoModelo,
      combustivel: carroCombustivel,
      diaria: carroDiaria
    };

    await this.wsveiculos.gravarVeiculo(carro).subscribe(
      (sucesso: any) => {
        alert('Veículo adicionado com sucesso!');
        this.carregarVeiculos();
        this.atualizarPagina();
      },
      (falha: string) => {
        alert('Falha na adição do veículo!\n' + falha);
      }
    );
  }
}
