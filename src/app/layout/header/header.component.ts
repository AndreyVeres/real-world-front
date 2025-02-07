import { Component, Inject, inject } from '@angular/core';
import { AuthService } from '../../auth/services/auth.service';
import { AsyncPipe, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { APP_ROUTES } from '../../shared/app.routes';

@Component({
  selector: '[appHeader]',
  imports: [AsyncPipe, NgIf , RouterLink],
  standalone: true,
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  isAuth = inject(AuthService).isAuth;
  route = APP_ROUTES
}
