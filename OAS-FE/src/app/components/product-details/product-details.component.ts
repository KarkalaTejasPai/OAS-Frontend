import { AfterViewInit, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-details',
  imports: [RouterModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements AfterViewInit {

  ngAfterViewInit() {
    const mainImage = document.getElementById('mainImage') as HTMLImageElement;
    const thumbnails = document.querySelectorAll('.thumbnail') as NodeListOf<HTMLImageElement>;

    thumbnails.forEach(thumbnail => {
      thumbnail.addEventListener('click', () => {
        mainImage.src = thumbnail.src;
      });
    });
  }
}
