import { inject } from '@angular/core';
import { AuthService, TokenService } from '@features/auth/';
import { EMPTY } from 'rxjs';


export const appInitializer = () => {
  const accessToken = inject(TokenService).getToken();
  const authService = inject(AuthService);

  return accessToken ? authService.me() : EMPTY;
};
