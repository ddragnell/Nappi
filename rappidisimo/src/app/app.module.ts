import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TagsComponent } from './components/tags/tags.component';
import { FoodPageComponent } from './components/food-page/food-page.component';
import { CartPageComponent } from './components/cart-page/cart-page.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { TitleComponent } from './components/title/title.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule} from  '@angular/platform-browser/animations';
import { InputContainerComponent } from './components/input-container/input-container.component';
import { InputValidationComponent } from './components/input-validation/input-validation.component';
import { TextInputComponent } from './components/text-input/text-input.component';
import { DefaultButtonComponent } from './components/default-button/default-button.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { OrderComponent } from './components/order/order.component';
import { MapsComponent } from './components/maps/maps.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchBarComponent,
    TagsComponent,
    FoodPageComponent,
    CartPageComponent,
    NotFoundComponent,
    TitleComponent,
    LoginPageComponent,
    InputContainerComponent,
    InputValidationComponent,
    TextInputComponent,
    DefaultButtonComponent,
    RegisterPageComponent,
    OrderComponent,
    MapsComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut:3000,
      newestOnTop:false
    }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
