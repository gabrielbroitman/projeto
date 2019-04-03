import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { SocialLoginModule } from 'angularx-social-login';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
   ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    DatePipe,
    BrowserModule,
    RouterModule,
    HttpClientModule],
  providers: [],
})
export class SharedModule {}
