import { EmptyString } from '@app/modules/shared/errors/emptyString.error';
import { ValueObject } from '@app/modules/shared/uuid';
import { validateStringNotEmpty } from '@app/modules/shared/validators/validators-values';

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
