import { inject, Injectable } from '@angular/core';
import { UserDto } from '../dto/user.dto';
import { AuthFacade } from '../auth.facade';
import { UserEntity } from '../../domain/model/user.entity';
import { Router } from '@angular/router';

@Injectable()
export class SetUserUseCase {
  private readonly router = inject(Router);
  private readonly authFacade = inject(AuthFacade);

  public execute(userDto: UserDto): void {
    const userEntity = UserEntity.reconstitute(
      userDto.id,
      userDto.email,
      userDto.bio,
      userDto.image,
      userDto.token,
      userDto.username
    );

    this.authFacade.setUser(userEntity);
    this.router.navigate(['/']);
  }
}
