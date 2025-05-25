import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { LoginDto } from './dto/login.dto';
import { AuthApiActions } from '../presentation/store/actions/auth.actions';
import {
  selectIsLoggedIn,
  selectUser,
} from '../presentation/store/selectors/auth.selectors';

@Injectable()
export class AuthFacade {
  public login(loginDto: LoginDto): void {
    this.store.dispatch(AuthApiActions.login(loginDto));
  }

  public me() {
    this.store.dispatch(AuthApiActions.me());
  }

  constructor(private readonly store: Store) {}

  public readonly $isLoggedIn = this.store.pipe(select(selectIsLoggedIn));

  public readonly $user = this.store.pipe(select(selectUser));
}
