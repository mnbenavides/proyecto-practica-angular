import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExitComponent } from './components/exit/exit.component';
import { HomeComponent } from './components/home/home.component';
import { OrderListComponent } from './components/order/order-list/order-list.component';

const routes: Routes = [
  {path:'',redirectTo:'/home', pathMatch: 'full'},
  {path:'order', component:OrderListComponent},
  {path:'exit', component:ExitComponent},
  {path:'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
