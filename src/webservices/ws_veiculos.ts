import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { Veiculo } from "../classes/veiculo";

@Injectable()
export class WS_Veiculos {
  private urlLer: string = "http://localhost:8080/ws_locadora/lista_dados.php?tabela=veiculo";
  private urlGravar: string = "http://localhost:8080/ws_locadora/adiciona_veiculo.php";

  constructor (private http: HttpClient) {}

  public lerVeiculos(): Observable<Veiculo[]> {
    return this.http.get<Veiculo[]>(this.urlLer);
  }

  public gravarVeiculo(carro: any): Observable<Veiculo> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };

    return this.http.post(this.urlGravar, carro, httpOptions)
      .pipe(
        map(this.extrairDados),
        catchError(this.trataErro)
      );
  }

  extrairDados(resposta: any): any {
    return resposta || {};
  }

  trataErro(erro: any): Observable<any> {
    return throwError(erro.message || erro);
  }
}
