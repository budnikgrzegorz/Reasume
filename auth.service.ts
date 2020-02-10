import { Injectable, Input, Output } from '@angular/core';
import { stringify } from 'querystring';

@Injectable()
export class AuthService {
  @Output()isLogged = false;

  constructor() { }

  logina(login: string, password: string) {

    if (login == 'admin') {
      if (password == 'password') {
        this.isLogged = true;
        console.log(this.isLogged + 'Logged');
      }
    } else {
      this.logout();
    }
  }
  logout() {
    this.isLogged = false;
    console.log(this.isLogged + 'Unlogged');
  }
}
