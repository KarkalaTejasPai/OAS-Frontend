import { Component } from '@angular/core';
import { RouterModule,RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterModule,RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
