import { EmptyString } from '@app/modules/shared/errors/emptyString.error';
import { ValueObject } from '@app/modules/shared/uuid';
import { validateStringNotEmpty } from '@app/modules/shared/validators/validators-values';

export class ArticleSlug extends ValueObject<string> {
  protected _value: string;

  public constructor(articleSlug: string) {
    super();

    if (!validateStringNotEmpty(articleSlug)) {
      throw new EmptyString();
    }

    this._value = articleSlug;
  }
}
