import { Injectable } from '@angular/core';
import { AuthRepository } from '../domain/repository/auth.repository';
import { LoginDto } from './dto/login.dto';
import { LocalStorageService } from '@shared/services';
import { tap } from 'rxjs';
import { LocalStorageSessionRepository } from '../infrastructure/local-storage-session.repository';
import { SessionRepository } from '../domain/repository/session.repository';

@Injectable()
export class AuthApplicationService {
  constructor(
    private readonly authRepository: AuthRepository // private readonly sessionRepository: SessionRepository
  ) {}

  me() {
    return this.authRepository.me();
  }

  login(payload: LoginDto) {
    return this.authRepository.login(payload).pipe(
      tap((user) => {
        console.log(user, 'USER');
        // this.sessionRepository.saveToken(user.user.token);
      })
    );
  }
}
