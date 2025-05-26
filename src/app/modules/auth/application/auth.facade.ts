import { inject, Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { LoginDto } from './dto/login.dto';
import {
  AuthApiActions,
  AuthPageActions,
} from '../presentation/store/actions/auth.actions';
import {
  selectIsLoggedIn,
  selectUser,
} from '../presentation/store/selectors/auth.selectors';
import { UserEntity } from '../domain/model/user.entity';

@Injectable()
export class AuthFacade {
  private readonly store = inject(Store);

  public readonly $isLoggedIn = this.store.pipe(select(selectIsLoggedIn));
  public readonly $user = this.store.pipe(select(selectUser));

  public login(loginDto: LoginDto): void {
    this.store.dispatch(AuthApiActions.login(loginDto));
  }

  public logOut() {
    this.setUser(null);
  }

  public setUser(user: UserEntity | null) {
    this.store.dispatch(AuthPageActions.setUser({ user }));
  }
}
