import { HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { SessionRepository } from '../../domain/repository/session.repository';

const addAuthHeader = (request: HttpRequest<unknown>, token: string) => {
  return request.clone({
    headers: request.headers.set('Authorization', `Bearer ${token}`),
  });
};

export const JwtInterceptor: HttpInterceptorFn = (request, next) => {
  const accessToken = inject(SessionRepository).getToken();

  if (accessToken) {
    const authRequest = addAuthHeader(request, accessToken.value);
    return next(authRequest);
  }
  return next(request);
};
