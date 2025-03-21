import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
// import { UserService } from '@entities/user';
import { AuthService } from '@features/auth';
import { UserService } from '@entities/user';

@Component({
  selector: '[appHeader]',
  imports: [AsyncPipe, RouterLink],
  standalone: true,
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  $user = inject(UserService).user$;
  private readonly authService = inject(AuthService);

  handleLogout() {
    this.authService.removeSession();
  }
}
