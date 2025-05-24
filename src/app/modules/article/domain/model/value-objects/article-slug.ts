import {
  EmptyString,
  validateStringNotEmpty,
  ValueObject,
} from '@app/modules/shared/uuid';

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
