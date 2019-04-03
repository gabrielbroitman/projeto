import { NgModule } from '@angular/core';

import { ExemploLoginComponent } from './exemplo-login.component';
import { SharedModule } from '../shared/shared.module';
import { ExemploRoutingModule } from './exemplo.routing.module';

@NgModule({
  // Declaramos o componente que faz parte do grupo do exemplo
  declarations: [ExemploLoginComponent],
  // importamos os modulos que usaremos nos componentes de exemplo
  imports: [ SharedModule, ExemploRoutingModule ],
  // definimos quem fazem os serviços(geralmente)
  providers: [],
})
export class ExemploModule {}
