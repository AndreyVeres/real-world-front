import { Injectable, inject } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

export enum NotificationType {
  Success = 'success',
  Error = 'error',
  Info = 'info',
  Warning = 'warning',
}

interface NotificationOptions {
  duration?: number;
  horizontalPosition?: MatSnackBarHorizontalPosition;
  verticalPosition?: MatSnackBarVerticalPosition;
  actionText?: string;
}

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private snackBar = inject(MatSnackBar);

  private defaultConfig: MatSnackBarConfig = {
    duration: 3000,
    horizontalPosition: 'center',
    verticalPosition: 'bottom',
  };

  public showMessage(message: string, type: NotificationType = NotificationType.Info, options?: NotificationOptions): void {
    const config: MatSnackBarConfig = {
      ...this.defaultConfig,
      panelClass: [`snackbar-${type}`],
      duration: options?.duration ?? this.defaultConfig.duration,
      horizontalPosition: options?.horizontalPosition ?? this.defaultConfig.horizontalPosition,
      verticalPosition: options?.verticalPosition ?? this.defaultConfig.verticalPosition,
    };

    this.snackBar.open(message, options?.actionText, config);
  }

  public success(message: string, options?: NotificationOptions): void {
    this.showMessage(message, NotificationType.Success, options);
  }

  public error(message: string, options?: NotificationOptions): void {
    this.showMessage(message, NotificationType.Error, options);
  }

  public info(message: string, options?: NotificationOptions): void {
    this.showMessage(message, NotificationType.Info, options);
  }

  public warning(message: string, options?: NotificationOptions): void {
    this.showMessage(message, NotificationType.Warning, options);
  }

  public dismiss(): void {
    this.snackBar.dismiss();
  }
}
