import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';

interface Product {
  productID: number;
  sellerID: number;
  title: string;
  description: string;
  startPrice: number;
  category: string;
  status: string;
  endTime: string;
  remainingTime?: string;
}

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit, OnDestroy {
  products: Product[] = [];
  private apiUrl = 'https://localhost:44385/api/Product';
  private timerInterval: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchProducts();
  }

  ngOnDestroy(): void {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
    }
  }

  fetchProducts(): void {
    this.http.get<Product[]>(this.apiUrl)
      .subscribe({
        next: (data) => {
          this.products = data.map(product => {
            const now = new Date();
            const endTime = new Date(now.getTime() + (2 * 60 * 60 * 1000)); // 2 hours timer
            return {
              ...product,
              endTime: endTime.toISOString(),
              status: 'Available'
            };
          });
          this.startCountdown();
        },
        error: (error) => {
          console.error('Error fetching products:', error);
        }
      });
  }

  startCountdown(): void {
    this.timerInterval = setInterval(() => {
      this.products.forEach(product => {
        const endTime = new Date(product.endTime).getTime();
        const now = new Date().getTime();
        const timeLeft = endTime - now;

        if (timeLeft > 0) {
          const hours = Math.floor(timeLeft / (1000 * 60 * 60));
          const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

          // Format numbers to always show two digits
          const formattedHours = hours.toString().padStart(2, '0');
          const formattedMinutes = minutes.toString().padStart(2, '0');
          const formattedSeconds = seconds.toString().padStart(2, '0');

          product.remainingTime = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
        } else {
          product.remainingTime = '00:00:00';
          product.status = 'Closed';
        }
      });
    }, 1000);
  }
}