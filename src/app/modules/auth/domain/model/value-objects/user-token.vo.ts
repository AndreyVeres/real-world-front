import {
  EmptyString,
  validateStringNotEmpty,
  ValueObject,
} from '@app/modules/shared/uuid';

export class UserToken extends ValueObject<string> {
  protected _value: string;

  public constructor(userToken: string) {
    super();

    if (!validateStringNotEmpty(userToken)) {
      throw new EmptyString();
    }

    this._value = userToken;
  }
}
