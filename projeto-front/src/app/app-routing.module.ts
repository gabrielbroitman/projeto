import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ExemploLoginComponent } from "./exemplo-login/exemplo-login.component";
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: "exemplo-login",
    loadChildren: "src/app/exemplo-login/exemplo.module#ExemploModule"
  },
  {
    path: "",
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
