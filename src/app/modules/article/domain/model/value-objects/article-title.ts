import { EmptyString } from '@app/modules/shared/errors/emptyString.error';
import { ValueObject } from '@app/modules/shared/uuid';
import { validateStringNotEmpty } from '@app/modules/shared/validators/validators-values';

export class ArticleTitle extends ValueObject<string> {
  protected _value: string;

  public constructor(articleTitle: string) {
    super();

    if (!validateStringNotEmpty(articleTitle)) {
      throw new EmptyString();
    }

    this._value = articleTitle;
  }
}
