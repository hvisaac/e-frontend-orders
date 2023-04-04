import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { HomeComponent } from './components/home/home.component';
import { PaytableComponent } from './components/paytable/paytable.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'orders', },
  //{path: 'home', component: HomeComponent},
  {path: 'orders', component: PaytableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
