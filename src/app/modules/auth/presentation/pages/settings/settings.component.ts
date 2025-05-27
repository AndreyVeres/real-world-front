import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthFacade } from '@app/modules/auth/application/auth.facade';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingsComponent {
  private readonly authFacade = inject(AuthFacade);
  private readonly router = inject(Router);
  logOut() {
    this.authFacade.logOut();
    this.router.navigate(['/']);
  }
}
