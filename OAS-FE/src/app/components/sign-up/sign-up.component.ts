import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  imports: [CommonModule, FormsModule, RouterModule] // Ensure FormsModule is imported for ngModel
})
export class SignUpComponent {
  username: string = '';
  email: string = '';
  phone: string = '';
  password: string = '';
  confirmPassword: string = '';
  submitted: boolean = false; // ✅ Add this missing property

  onSubmit(form: any) {
    this.submitted = true; // ✅ Mark form as submitted

    if (form.valid) {
      console.log('Sign Up Successful:', form.value);
      alert('Registration Successful!');
    }
  }
}



