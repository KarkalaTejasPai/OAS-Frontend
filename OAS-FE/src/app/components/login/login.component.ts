import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [CommonModule, FormsModule, RouterModule] // Ensure FormsModule is imported for ngModel
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  loginError: string = '';
  submitted: boolean = false; // ✅ Added to track submission status

  onSubmit(form: any) {
    this.submitted = true; // ✅ Mark form as submitted

    if (form.valid) {
      console.log('Login successful:', form.value);
    } else {
      this.loginError = 'Invalid username or password';
    }
  }
}
