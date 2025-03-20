import { inject, Injectable } from '@angular/core';
import { LocalStoregeService } from '../../../core/services/ls.service';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  private readonly localStorageService = inject(LocalStoregeService);

  getToken() {
    return this.localStorageService.getKey('token');
  }

  saveToken( token: string) {
    this.localStorageService.saveKey('token', token);
  }

  destroyToken() {
    this.localStorageService.destroyKey('token');
  }
}
