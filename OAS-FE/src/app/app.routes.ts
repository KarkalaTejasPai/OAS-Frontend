import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AuctionsComponent } from './components/auctions/auctions.component';
import { SellProductsComponent } from './components/sell-products/sell-products.component';

export const routes: Routes = [
    {
        path: 'app-home',
        component: HomeComponent
    },
    {
        path: 'app-auctions',
        component: AuctionsComponent
    },
    {
        path: 'app-sell-products',
        component: SellProductsComponent
    }
];
