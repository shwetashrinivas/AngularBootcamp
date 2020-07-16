import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {NotFoundComponent} from './not-found/not-found.component';

const routes: Routes = [
  //For lazy loading Elements Module
  {
    path:'elements', 
    loadChildren: () => import('./elements/elements.module').then(m => m.ElementsModule)
  },

  {
    path:'collections',
    loadChildren: () => import('./collections/collections.module').then(m => m.CollectionsModule)
  },

  {
    path:'views',
    loadChildren: () => import('./views/views.module').then(m => m.ViewsModule)
  },
  
  {
    path:'mods',
    loadChildren: () => import('./semantic-mods/semantic-mods.module').then(m => m.SemanticModsModule)
  },

  { path: '', component: HomeComponent},
  //  The wildcard path code only works if order of imports is changed in app-module (app-routing-module is put in last)
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
