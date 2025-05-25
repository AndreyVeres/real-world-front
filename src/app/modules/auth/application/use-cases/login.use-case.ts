import { inject, Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { AuthRepository } from '../../domain/repository/auth.repository';
import { LoginDto } from '../dto/login.dto';
import { UserResponse } from '../../infrastructure/http-auth.repository';
import { SetUserUseCase } from './set-user.use-case';

@Injectable()
export class LoginUseCase {
  private readonly authRepository = inject(AuthRepository);
  private readonly setUserUseCase = inject(SetUserUseCase);

  public execute(dto: LoginDto): Observable<UserResponse> {
    return this.authRepository
      .login(dto)
      .pipe(tap(({ user }) => this.setUserUseCase.execute(user)));
  }
}
