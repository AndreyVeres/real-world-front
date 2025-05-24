import {
  EmptyString,
  validateStringNotEmpty,
  ValueObject,
} from '@app/modules/shared/uuid';

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
