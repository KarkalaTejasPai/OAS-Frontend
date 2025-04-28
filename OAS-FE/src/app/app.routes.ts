import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AuctionsComponent } from './components/auctions/auctions.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

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
        path:'login',
        component:LoginComponent
    },
    {
        path:'signup',
        component:SignUpComponent
    }
];
