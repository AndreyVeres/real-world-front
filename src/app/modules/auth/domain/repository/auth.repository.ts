// import { User } from '@entities/user';

import { Observable } from 'rxjs';
import { LoginDto } from '../../application/dto/login.dto';
import { RegisterDto } from '../../application/dto/register.dto';
import { UserResponse } from '../../infrastructure/http-auth.repository';

export abstract class AuthRepository {
  public abstract register(payload: RegisterDto): Observable<UserResponse>;
  public abstract login(payload: LoginDto): Observable<UserResponse>;
  public abstract me(): Observable<any>;

  // private setSession(response: UserResponse) {
  //   const token = response.user.token;
  //   console.log(token);
  //   this.tokenService.saveToken(token);
  //   this.$isLogged.next(true);
  // }

  // removeSession() {
  //   this.tokenService.destroyToken();
  //   this.userService.clearUser();
  //   this.$isLogged.next(false);
  // }
}
