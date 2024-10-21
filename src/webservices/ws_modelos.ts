import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Modelo } from "../classes/modelo";

@Injectable()
export class WS_Modelos {
  private strURL: string = "http://localhost:8080/ws_locadora/lista_dados.php?tabela=modelo";

  constructor (private http: HttpClient) {}

  public lerModelos(): Observable<Modelo[]> {
    return this.http.get<Modelo[]>(this.strURL);
  }
}
