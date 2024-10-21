import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Cor } from "../classes/cor";

@Injectable()
export class WS_Cores {
  private strURL: string = "http://localhost:8080/ws_locadora/lista_dados.php?tabela=cor_veiculo";

  constructor (private http: HttpClient) {}

  public lerCores(): Observable<Cor[]> {
    return this.http.get<Cor[]>(this.strURL);
  }
}
