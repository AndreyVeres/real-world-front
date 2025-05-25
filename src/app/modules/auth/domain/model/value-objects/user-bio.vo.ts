import { ValueObject } from '@app/modules/shared/uuid';

export class UserBio extends ValueObject<string> {
  protected _value: string;

  public constructor(userBio: string) {
    super();

    this._value = userBio;
  }
}
