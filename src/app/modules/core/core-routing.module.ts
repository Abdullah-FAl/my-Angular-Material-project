import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { CoreRoutingComponent } from './view/core-routing/core-routing.component';
// import { IsAdminUserGuard,IsParticipantUserGuard } from '../shared/guards/min-api.guards';




const routes: Routes = [


  {path: '' , component: CoreRoutingComponent,

  children: [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'login' , component: LoginPageComponent},



    // {path: 'AdminDashboard',
    // loadChildren: '../dashboards/admin-dashboard/admin-dashboard.module#AdminDashboardModule'},

    // {path: 'ReportsDashboard' ,
    // loadChildren: '../dashboards/reports-dashboard/reports-dashboard.module#ReportsDashboardModule'}

]

},










];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
