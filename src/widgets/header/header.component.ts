import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
// import { UserService } from '@entities/user';
// import { UserService } from '@entities/user';
import { AuthFacade } from '@app/modules/auth/application/auth.facade';

@Component({
  selector: '[appHeader]',
  imports: [AsyncPipe, RouterLink],
  standalone: true,
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  $user = inject(AuthFacade).$user;

  handleLogout() {
    // this.authService.removeSession();
  }
}
