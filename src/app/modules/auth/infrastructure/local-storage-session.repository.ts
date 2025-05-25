import { Injectable } from '@angular/core';
import { SessionRepository } from '../domain/repository/session.repository';
import { UserToken } from '../domain/model/value-objects/user-token.vo';

const TOKEN_KEY = 'auth_app_token';

@Injectable()
export class LocalStorageSessionRepository extends SessionRepository {
  saveToken(token: UserToken): void {
    localStorage.setItem(TOKEN_KEY, token.value);
  }
  getToken(): UserToken | null {
    const tokenValue = localStorage.getItem(TOKEN_KEY);
    return tokenValue ? new UserToken(tokenValue) : null;
  }
  clearToken(): void {
    localStorage.removeItem(TOKEN_KEY);
  }
}
