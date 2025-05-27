import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { AuthFacade } from '@app/modules/auth/application/auth.facade';

@Component({
  selector: '[appHeader]',
  imports: [AsyncPipe, RouterLink],
  standalone: true,
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  private readonly authfacade = inject(AuthFacade);
  $user = this.authfacade.$user;
}
