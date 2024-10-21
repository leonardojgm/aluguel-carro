import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtraVeiculo'
})
@Injectable()
export class FiltrarVeiculo implements PipeTransform {
  transform(veiculos: any, valor: string): any {
    if (!veiculos || !valor) {
      return veiculos
    }
    else {
      return veiculos.filter((veiculo: { [x: string]: string; }) => veiculo['Placa'] == valor);
    }
  }
}
