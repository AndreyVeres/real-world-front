import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ApiService } from '@shared/services';
import { User } from './user.types';

@Injectable({
  providedIn: 'root',
})
export class UserService extends ApiService {
  user$ = new BehaviorSubject<User | null>(null);

  setUser(user: User) {
    this.user$.next(user);
  }

  clearUser() {
    this.user$.next(null);
  }
}
