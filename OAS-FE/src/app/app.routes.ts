import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AuctionsComponent } from './components/auctions/auctions.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SellProductsComponent } from './components/sell-products/sell-products.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductComponent } from './components/product/product.component';


export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'app-auctions',
        component: AuctionsComponent
    },
    {
        path: 'app-login',
        component: LoginComponent
    },
    {
        path: 'app-sign-up',
        component: SignUpComponent
    },
    {
        path: 'app-sell-products',
        component: SellProductsComponent
    },
    {

        path: 'app-product-details',
        component: ProductDetailsComponent
    },
    {
        path: 'app-product',
        component: ProductComponent
    }
];
