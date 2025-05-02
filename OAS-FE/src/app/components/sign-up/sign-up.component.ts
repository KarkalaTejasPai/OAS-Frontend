import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  imports: [CommonModule, FormsModule, RouterModule]
})
export class SignUpComponent {
  username: string = '';
  email: string = '';
  phone: string = '';
  password: string = '';
  confirmPassword: string = '';
  role: string = '';
  submitted: boolean = false;

  onSubmit(form: any) {
    this.submitted = true;

    if (form.valid) {
      console.log('Sign Up Successful:', form.value);
      alert('Registration Successful!');
      form.reset(); // Reset form upon success
      this.submitted = false;
    }
  }
}
// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { RouterModule } from '@angular/router';
// // import { HttpClient } from '@angular/common/http';
// import { HttpClient, HttpClientModule } from '@angular/common/http';

// @Component({
//   standalone: true,
//   selector: 'app-sign-up',
//   templateUrl: './sign-up.component.html',
//   styleUrls: ['./sign-up.component.css'],
//   imports: [CommonModule, FormsModule, RouterModule,HttpClientModule]
// })
// export class SignUpComponent {
//   username: string = '';
//   email: string = '';
//   phone: string = '';
//   password: string = '';
//   confirmPassword: string = '';
//   role: string = '';
//   submitted: boolean = false;
//   apiUrl: string = 'https://localhost:44385/api/User'; // Replace with your actual API URL

//   constructor(private http: HttpClient) {}

//   onSubmit(form: any) {
//     this.submitted = true;

//     if (form.valid) {
//       const userData = {
//         Name: this.username,
//         Email: this.email,
//         Password: this.password,
//         Role: this.role,
//         ContactNumber: this.phone
//       };

//       this.http.post(this.apiUrl, userData).subscribe(
//         (response) => {
//           console.log('User registered successfully:', response);
//           alert('Registration Successful!');
//           form.reset();
//           this.submitted = false;
//         },
//         (error) => {
//           console.error('Error registering user:', error);
//           alert('Registration failed. Please try again.');
//         }
//       );
//     }
//   }
// }

