import { Pipe, PipeTransform } from "@angular/core";
import { FotoComponent } from './foto.component';

@Pipe ({
    name: 'filtroPorTitulo'
})

export class filtroPorTitulo implements PipeTransform {

    transform(fotos: FotoComponent[], digitado: string) {

        digitado = digitado.toLowerCase();
        return fotos.filter ( foto => foto.titulo.toLowerCase().includes (digitado))
        

        //console.log(fotos);
        //console.log(digitado);
    }

}