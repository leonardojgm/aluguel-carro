import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Tipo } from "../classes/tipo";

@Injectable()
export class WS_Tipos {
  private strURL: string = "http://localhost:8080/ws_locadora/lista_dados.php?tabela=tipo_veiculo";

  constructor (private http: HttpClient) {}

  public lerTipos(): Observable<Tipo[]> {
    return this.http.get<Tipo[]>(this.strURL);
  }
}
