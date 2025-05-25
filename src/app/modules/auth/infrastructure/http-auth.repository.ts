import { inject, Injectable } from '@angular/core';
import { AuthRepository } from '../domain/repository/auth.repository';
import { HttpClient } from '@angular/common/http';
import { LoginDto } from '../application/dto/login.dto';
import { RegisterDto } from '../application/dto/register.dto';
import { API_ROUTES } from '@shared/const/api.routes';
import { env } from 'env';
import { UserDto } from '../application/dto/user.dto';
import { Observable } from 'rxjs';

export interface UserResponse {
  user: {
    bio: string;
    email: string;
    id: number;
    image: string;
    token: string;
    username: string;
  };
}

@Injectable()
export class AuthHttpRepository implements AuthRepository {
  public register(payload: RegisterDto) {
    return this.http.post<UserResponse>(
      env.API_PATH + API_ROUTES.REGISTER,
      payload
    );
  }

  public login(payload: LoginDto) {
    return this.http.post<UserResponse>(
      env.API_PATH + API_ROUTES.LOGIN,
      payload
    );
  }

  public me(): Observable<{ user: UserDto }> {
    return this.http.get<{ user: UserDto }>(env.API_PATH + API_ROUTES.ME);
  }
  private readonly http = inject(HttpClient);
}
