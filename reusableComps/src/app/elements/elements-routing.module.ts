import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ElementsHomeComponent} from './elements-home/elements-home.component';

const routes: Routes = [
  //For eager loading
 // {path: 'elements' , component: ElementsHomeComponent},
 
  //For lazy loading , provide relative path
  {path: '' , component: ElementsHomeComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElementsRoutingModule { }
