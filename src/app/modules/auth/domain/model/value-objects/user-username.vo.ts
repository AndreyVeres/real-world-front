import {
  ValueObject,
  validateStringNotEmpty,
  EmptyString,
} from '@app/modules/shared/uuid';

export class UserName extends ValueObject<string> {
  protected _value: string;

  public constructor(username: string) {
    super();

    if (!validateStringNotEmpty(username)) {
      throw new EmptyString();
    }

    this._value = username;
  }
}
