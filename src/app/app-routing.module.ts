import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TravelersComponent } from './views/user/travelers/travelers.component';


const routes: Routes = [
  {
    path: 'user',
    loadChildren: () => import('./views/user/user.module').then(m => m.UserModule)
  },
  {
    path: '',
    redirectTo: 'user/bookings',
    pathMatch: 'full'
  },{ path: 'accounts', component: TravelersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 