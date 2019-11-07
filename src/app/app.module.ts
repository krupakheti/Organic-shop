import { ProductService } from './product.service';
import { CategoryService } from './category.service';
import { AdminAuthGuardService } from './admin-auth-guard.service';



import { AuthService } from './auth.service';


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';
import { environment } from 'src/environments/environment';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { HomeComponent } from './home/home.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';

import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import {RouterModule} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { AuthGuard } from './auth-guard.service';
import { UserService } from './user.service';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import {FormsModule} from '@angular/forms';
import {CustomFormsModule} from 'ng2-validation';







@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    HomeComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    ProductsComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    LoginComponent,
    ProductFormComponent

    
    
        
    ],
   




  imports: [

    FormsModule,
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireModule,
    NgbModule,
    CustomFormsModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'products', component: ProductsComponent},
      {path: 'shopping-cart', component: ShoppingCartComponent},
      {path: 'login', component: LoginComponent},

      {path: 'check-out', component: CheckOutComponent, canActivate: [AuthGuard]},
      {path: 'order-success', component: OrderSuccessComponent,  canActivate: [AuthGuard]},
      {path: 'my/orders', component: MyOrdersComponent,  canActivate: [AuthGuard]},
      {path: 'admin/products/new', component: ProductFormComponent,  canActivate: [AuthGuard, AdminAuthGuardService]},

      {path: 'admin/products/:id', component: ProductFormComponent,  canActivate: [AuthGuard, AdminAuthGuardService]},
      
      {path: 'admin/products', component: AdminProductsComponent,  canActivate: [AuthGuard, AdminAuthGuardService]},
      {path: 'admin/orders', component: AdminOrdersComponent,  canActivate: [AuthGuard, AdminAuthGuardService]},

       
      
  ])
    
  ],
  providers: [
    AuthService, 
    AuthGuard, 
    AdminAuthGuardService,
    UserService,
    CategoryService,
    ProductService
  
  
  ],


  bootstrap: [AppComponent]
})

export class AppModule { }
