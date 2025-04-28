import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { RouterOutlet } from '@angular/router';
import { AuctionsComponent } from './components/auctions/auctions.component';
import { SellProductsComponent } from './components/sell-products/sell-products.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, RouterOutlet, AuctionsComponent,SellProductsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'OAS-FE';
}