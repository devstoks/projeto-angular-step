
import { Injectable, inject } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Auth {

  private http = inject(HttpClient);

  api = 'https://dummyjson.com/auth';

  login(username: string, password: string) {

    return this.http.post(
      `${this.api}/login`,
      {
        username,
        password
      }
    );
  }

  getMe() {

    const token = localStorage.getItem('token');

    return this.http.get(
      `${this.api}/me`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
  }
}
