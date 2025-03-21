import { HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { TokenService } from './model/token.service';

const addAuthHeader = (request: HttpRequest<unknown>, token: string) => {
  return request.clone({
    headers: request.headers.set('Authorization', `Bearer ${token}`),
  });
};

export const JwtInterceptor: HttpInterceptorFn = (request, next) => {
  const accessToken = inject(TokenService).getToken();

  if (accessToken) {
    const authRequest = addAuthHeader(request, accessToken);
    return next(authRequest)
  }
  return next(request);
};
