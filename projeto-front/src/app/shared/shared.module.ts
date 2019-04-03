import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { SocialLoginModule } from 'angularx-social-login';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@NgModule({
  // Declaramos os componentes, directives etc que usariamos aqui
  declarations: [],
  // Declaramos os modulos que usariamos NESSE modulo
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
   ],
   // components e modulos para serem levados para o modulo que o importar.
  exports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    DatePipe,
    BrowserModule,
    RouterModule,
    HttpClientModule],

    // em providers definimos quem são os responsaveis pelos serviços,
    // anotamos aqui para o servidor entender que ele deve injetar.
  providers: [],
})
export class SharedModule {}
