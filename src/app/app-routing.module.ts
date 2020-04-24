import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomelistComponent } from './welcomelist/welcomelist.component';


const routes: Routes = [
  {path:"welocomes", component:WelcomelistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
