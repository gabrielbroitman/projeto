import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ExemploLoginComponent } from "./exemplo-login/exemplo-login.component";

const routes: Routes = [
  {
    path: "exemplo-login",
    loadChildren: "src/app/exemplo-login/exemplo.module#ExemploModule"
  },
  {
    path: "",
    component: ExemploLoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
