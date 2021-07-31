import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IndividualComponent } from './individual/individual.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { TrashComponent } from './trash/trash.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'individual',
    component: IndividualComponent
  },
  {
    path: 'sidemenu',
    component: SidemenuComponent
  },
  {
    path: 'trash',
    component: TrashComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
