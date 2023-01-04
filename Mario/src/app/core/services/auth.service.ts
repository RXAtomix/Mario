import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token= false;

  login() {
    this.token = true;
    const userTokenSerialized: string = JSON.stringify(this.token);
    localStorage.setItem('userToken',userTokenSerialized);
  }

  getToken(): boolean {
    const userTokenLocalStorage = localStorage.getItem('userToken');
    const userToken = JSON.parse(userTokenLocalStorage!);
    return userToken;
  }

}
