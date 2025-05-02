import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
// import { SignUpComponent } from './app/components/sign-up/sign-up.component'; 

// bootstrapApplication(SignUpComponent);

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));


