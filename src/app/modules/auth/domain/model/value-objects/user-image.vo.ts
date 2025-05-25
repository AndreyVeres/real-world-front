import { ValueObject } from '@app/modules/shared/uuid';

export class UserImage extends ValueObject<string> {
  protected _value: string;

  public constructor(userImage: string) {
    super();

    this._value = userImage;
  }
}
