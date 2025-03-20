import {  HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { LoadingService } from '../services/loading.service';
import { tap } from 'rxjs';

export const LoadingInterceptor: HttpInterceptorFn = (request, next) => {
  const loadingService = inject(LoadingService)

  loadingService.show()

  return next(request).pipe(
    tap({complete: () => loadingService.hide() , error: () => loadingService.hide()})
  )
};
