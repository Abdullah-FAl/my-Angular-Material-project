import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [



  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },


  {
    path: '',
    loadChildren: './modules/home/home.module#HomeModule',
  },


{
  path: '**',
  redirectTo: '',
  pathMatch: 'full'
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
