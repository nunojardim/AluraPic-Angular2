import { NgModule } from '@angular/core';
import { FotoComponent } from './foto.component';
import { filtroPorTitulo } from './foto.pipe';

@NgModule ({
    declarations: [ FotoComponent, filtroPorTitulo ],
    exports: [ FotoComponent, filtroPorTitulo ]

})

export class FotoModule { }