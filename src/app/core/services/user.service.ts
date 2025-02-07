import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../types/user.types';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly user$ = new BehaviorSubject<User | null>(null);

  get currentUser() {
    return this.user$.asObservable();
  }

  setUser(user: User) {
    console.log('[set user]', user);
    this.user$.next(user);
  }

  clearUser() {
    this.user$.next(null);
  }
}
