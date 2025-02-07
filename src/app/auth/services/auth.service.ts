import { inject, Injectable } from '@angular/core';
import { ApiService } from '../../core/services/api.service';
import { User } from '../../core/types/user.types';
import { env } from '../../../env';
import { API_ROUTES } from '../../api.routes';
import { UserService } from '../../core/services/user.service';
import { JwtService } from '../../core/services/jwt.service';
import { tap } from 'rxjs';

export interface RegisterPayload {
  email: string;
  password: string;
  username: string;
}

export interface LoginPayload {
  email:string;
  password:string;
}


export interface Access {
  access_token:string;
}

@Injectable({
  providedIn: 'root',
})

export class AuthService extends ApiService {
  isAuth = inject(UserService).currentUser;
  private readonly jwtService = inject(JwtService)

  register(payload: RegisterPayload) {
    return this.post<Access, any>(env.API_PATH + API_ROUTES.REGISTER, payload)
    .pipe(
      tap((token) =>  this.jwtService.saveToken(token.access_token))
    )
  }

  login(payload:LoginPayload) {
    return this.post<Access, any>(env.API_PATH + API_ROUTES.LOGIN , payload)
  }
}
