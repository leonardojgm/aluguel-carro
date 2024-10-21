import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Marca } from "../classes/marca";

@Injectable()
export class WS_Marcas {
  private strURL: string = "http://localhost:8080/ws_locadora/lista_dados.php?tabela=marca";

  constructor (private http: HttpClient) {}

  public lerMarcas(): Observable<Marca[]> {
    return this.http.get<Marca[]>(this.strURL);
  }
}
