import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExemploLoginComponent } from './exemplo-login.component';

// localhost.../exemplo - mas esse é um metodo simples
const routes: Routes = [
  {
  path: 'exemplo',
  component: ExemploLoginComponent
}];


// usando o forChild(routes), fazemos com que o AppComponent sempre tenha as rotas na manga.( entendo assim resumidamente)
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [],
  declarations: [],
})
export class ExemploRoutingModule { }
