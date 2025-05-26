import { EmptyString } from '@app/modules/shared/errors/emptyString.error';
import { ValueObject } from '@app/modules/shared/uuid';
import { validateStringNotEmpty } from '@app/modules/shared/validators/validators-values';

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
