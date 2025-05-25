import { LoginDto } from '@app/modules/auth/application/dto/login.dto';
import { UserEntity } from '@app/modules/auth/domain/model/user.entity';
import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const AuthApiActions = createActionGroup({
  source: 'Auth Api',
  events: {
    Login: props<LoginDto>(),
    Register: props<{ user: UserEntity }>(),
    Me: emptyProps(),
  },
});

export const AuthPageActions = createActionGroup({
  source: 'Auth Page',
  events: {
    setUser: props<{ user: UserEntity }>(),
  },
});
