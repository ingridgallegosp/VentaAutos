import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'aEspacio'
})
    
export class AEspacioPipe implements PipeTransform {
  transform(valorInicial: string, aBuscar: string): string {
    const reemplaza: string = " ";
    return valorInicial.replace( aBuscar, reemplaza );
  }
}