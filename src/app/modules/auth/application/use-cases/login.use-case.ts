import { inject, Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { AuthRepository } from '../../domain/repository/auth.repository';
import { LoginDto } from '../dto/login.dto';
import { UserEntity } from '../../domain/model/user.entity';
import { UserMapper } from '../../infrastructure/user.mapper';
import { Router } from '@angular/router';

@Injectable()
export class LoginUseCase {
  private readonly authRepository = inject(AuthRepository);
  private readonly router = inject(Router);

  public execute(dto: LoginDto): Observable<UserEntity> {
    return this.authRepository.login(dto).pipe(
      map(({ user }) => UserMapper.toEntity(user)),
      tap(() => this.router.navigate(['/']))
    );
  }
}
