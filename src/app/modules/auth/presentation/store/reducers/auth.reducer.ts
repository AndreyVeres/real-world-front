import { ArticleDto } from '@app/modules/article/application/dto/article.dto';
import { createReducer, on } from '@ngrx/store';

import { UserEntity } from '@app/modules/auth/domain/model/user.entity';
import { AuthPageActions } from '../actions/auth.actions';

export const authFeatureKey = 'auth';

export interface AuthState {
  user: UserEntity | null;
  isLoggedIn: boolean;
}

export const initialState: AuthState = {
  user: null,
  isLoggedIn: false,
};

export const authReducer = createReducer(
  initialState,
  on(AuthPageActions.setUser, (_, payload) => {
    console.log('dispatch')
    return {
      user: payload.user,
      isLoggedIn: payload.user ? true : false,
    };
  })
);
