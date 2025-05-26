import { inject, Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { AuthRepository } from '../../domain/repository/auth.repository';
import { UserEntity } from '../../domain/model/user.entity';
import { UserMapper } from '../../infrastructure/user.mapper';
import { AuthFacade } from '../auth.facade';

@Injectable()
export class MeUseCase {
  private readonly authRepository = inject(AuthRepository);
  private readonly authFacade = inject(AuthFacade);

  public execute(): Observable<UserEntity> {
    return this.authRepository.me().pipe(
      map(({ user }) => UserMapper.toEntity(user)),
      tap((user) => this.authFacade.setUser(user))
    );
  }
}
