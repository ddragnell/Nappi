import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FoodPageComponent } from './components/food-page/food-page.component';
import { CartPageComponent } from './components/cart-page/cart-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { MapsComponent } from './components/maps/maps.component';



const routes: Routes = [
  {path: '', component:LoginPageComponent},
  {path: 'search/:searchTerm', component:HomeComponent},
  {path: 'tag/:tag', component:HomeComponent},
  {path: 'food/:id', component:FoodPageComponent},
  {path: 'cart-page', component: CartPageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'register', component:RegisterPageComponent},
  {path: 'home', component:HomeComponent},
  {path: 'map', component:MapsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
