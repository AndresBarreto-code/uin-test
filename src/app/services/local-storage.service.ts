import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  setLogin(status: string) {
    localStorage.setItem('logged', status)
    console.log(`logged is now ${status}`)
  }

  getLogin() {
    return localStorage.getItem('logged') === 'true';
  }

}
