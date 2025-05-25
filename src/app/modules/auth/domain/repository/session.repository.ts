import { UserToken } from '../model/value-objects/user-token.vo';

export abstract class SessionRepository {
  abstract saveToken(token: UserToken): Promise<void> | void;
  abstract getToken(): UserToken | null;
  abstract clearToken(): Promise<void> | void;
}
