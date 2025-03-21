import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  getKey(key: string) {
    return localStorage.getItem(key);
  }

  saveKey(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  destroyKey(key: string) {
    localStorage.removeItem(key);
  }
}
