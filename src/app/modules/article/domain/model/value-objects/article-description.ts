import { EmptyString } from '@app/modules/shared/errors/emptyString.error';
import { ValueObject } from '@app/modules/shared/uuid';
import { validateStringNotEmpty } from '@app/modules/shared/validators/validators-values';

export class ArticleDescription extends ValueObject<string> {
  protected _value: string;

  public constructor(articleDescription: string) {
    super();

    if (!validateStringNotEmpty(articleDescription)) {
      throw new EmptyString();
    }

    this._value = articleDescription;
  }
}
