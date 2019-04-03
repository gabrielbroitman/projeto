import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { SocialLoginModule } from 'angularx-social-login';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@NgModule({
  // Declaramos os componentes, directives etc aqui
  declarations: [],
  // Declaramos os modulos que usaremos
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
   ],
   // components e modulos para serem levados para o AppModule.
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
