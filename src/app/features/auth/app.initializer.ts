import { inject } from '@angular/core';
import { EMPTY } from 'rxjs';
import { AuthService } from './model/auth.service';
import { TokenService } from './model/token.service';

export const appInitializer = () => {
  const accessToken = inject(TokenService).getToken();
  const authService = inject(AuthService);

  return accessToken ? authService.me() : EMPTY;
};
