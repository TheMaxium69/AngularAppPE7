import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {PokemonComponent} from "./pokemon/pokemon.component";
import {ChuckComponent} from "./chuck/chuck.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'home', redirectTo: '', pathMatch: 'full'},
  {path: 'Pokemon', component:PokemonComponent},
  {path: 'Chuck', component:ChuckComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
