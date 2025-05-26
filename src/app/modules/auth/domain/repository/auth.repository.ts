import { Observable } from 'rxjs';
import { LoginDto } from '../../application/dto/login.dto';
import { RegisterDto } from '../../application/dto/register.dto';
import { UserResponse } from '../../infrastructure/http-auth.repository';

export abstract class AuthRepository {
  public abstract register(payload: RegisterDto): Observable<UserResponse>;
  public abstract login(payload: LoginDto): Observable<UserResponse>;
  public abstract me(): Observable<UserResponse>;
}
