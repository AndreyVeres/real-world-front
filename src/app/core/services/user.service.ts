import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../types/user.types';
import { ApiService } from './api.service';

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
