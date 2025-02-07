import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { JwtService } from '../services/jwt.service';

export const JwtInterceptor: HttpInterceptorFn = (request, next) => {
  const token = inject(JwtService).getToken();

  const clone = request.clone();

  if(token){
    clone.headers.append('Authorization', `Bearer ${token}`)
  }

  return next(clone);
};
