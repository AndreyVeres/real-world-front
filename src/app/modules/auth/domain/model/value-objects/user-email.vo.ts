import { ValueObject } from '@app/modules/shared/uuid';

export class UserEmail extends ValueObject<string> {
  protected _value: string;

  public constructor(userEmail: string) {
    super();

    this._value = userEmail;
  }
}
