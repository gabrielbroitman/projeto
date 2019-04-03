import { NgModule } from '@angular/core';

import { ExemploLoginComponent } from './exemplo-login.component';
import { SharedModule } from '../shared/shared.module';
import { ExemploRoutingModule } from './exemplo.routing.module';

@NgModule({
  declarations: [ExemploLoginComponent],
  imports: [ SharedModule, ExemploRoutingModule ],
  exports: [],
  providers: [],
})
export class ExemploModule {}
