import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Combustivel } from "../classes/combustivel";

@Injectable()
export class WS_Combustiveis {
  private strURL: string = "http://localhost:8080/ws_locadora/lista_dados.php?tabela=combustivel";

  constructor (private http: HttpClient) {}

  public lerCombustiveis(): Observable<Combustivel[]> {
    return this.http.get<Combustivel[]>(this.strURL);
  }
}
