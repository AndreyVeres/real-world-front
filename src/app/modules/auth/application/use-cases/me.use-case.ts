import { inject, Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { AuthRepository } from '../../domain/repository/auth.repository';
import { UserDto } from '../dto/user.dto';
import { SetUserUseCase } from './set-user.use-case';

@Injectable()
export class MeUseCase {
  constructor(private readonly authRepository: AuthRepository) {}

  private readonly setUserUseCase = inject(SetUserUseCase);

  public execute(): Observable<{ user: UserDto }> {
    return this.authRepository
      .me()
      .pipe(tap(({ user }) => this.setUserUseCase.execute(user)));
  }
}
