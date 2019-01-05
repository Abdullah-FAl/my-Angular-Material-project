import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { RoutingComponent } from './view/routing/routing.component';


const routes: Routes = [


{
  path: '',
  component: RoutingComponent,

  children: [
    {path: '',redirectTo: 'Welcome',pathMatch: 'full'},

    {
    path: 'Welcome' ,
    component: WelcomeComponent
  }

]
  },

  {
    path: 'System' ,
    loadChildren: '../core/core.module#CoreModule'
  },








  {
    path: '**',
    redirectTo: 'erro404',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
