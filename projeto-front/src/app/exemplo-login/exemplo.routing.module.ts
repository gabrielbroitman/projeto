import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExemploLoginComponent } from './exemplo-login.component';

// localhost.../exemplo - mas esse é um metodo simples
const routes: Routes = [
  {
  path: "exemplo",
  component: ExemploLoginComponent
}]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [],
  declarations: [],
})
export class ExemploRoutingModule { }
