
import { Component, inject } from '@angular/core';

import { Auth } from '../services/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  private authService = inject(Auth);

  login() {

    this.authService.login(
      'emilys',
      'emilyspass'
    ).subscribe((response: any) => {

      localStorage.setItem(
        'token',
        response.accessToken
      );

      alert('Login realizado!');
    });
  }
}
