import { Entity } from '@app/modules/shared/entity';
import { UserEmail } from './value-objects/user-email.vo';
import { UserBio } from './value-objects/user-bio.vo';
import { UserImage } from './value-objects/user-image.vo';
import { UserToken } from './value-objects/user-token.vo';
import { UserName } from './value-objects/user-username.vo';

export class UserEntity extends Entity {
  override equalsTo(objectToCompare: this): boolean {
    return (
      objectToCompare instanceof UserEntity && objectToCompare.id === this.id
    );
  }

  public get token() {
    return this._token;
  }

  public constructor(
    public readonly id: string,
    public readonly email: UserEmail,
    public readonly bio: UserBio,
    public readonly image: UserImage,
    public readonly _token: UserToken,
    public readonly username: UserName
  ) {
    super();
  }

  public static create(
    id: string,
    email: string,
    bio: string,
    image: string,
    token: string,
    username: string
  ): UserEntity {
    return new UserEntity(
      id,
      new UserEmail(email),
      new UserBio(bio),
      new UserImage(image),
      new UserToken(token),
      new UserName(username)
    );
  }

  public static reconstitute(
    id: string,
    email: string,
    bio: string,
    image: string,
    token: string,
    username: string
  ): UserEntity {
    return new UserEntity(
      id,
      new UserEmail(email),
      new UserBio(bio),
      new UserImage(image),
      new UserToken(token),
      new UserName(username)
    );
  }
}
