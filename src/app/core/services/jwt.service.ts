import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class JwtService {
  getToken(){
    return localStorage.getItem('token')
  }

  saveToken(token: string) {
    localStorage.setItem('token', token);
  }

  destroyToken() {
    localStorage.removeItem('jwtToken');
  }
}
