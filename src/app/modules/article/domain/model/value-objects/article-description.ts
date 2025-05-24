import {
  EmptyString,
  validateStringNotEmpty,
  ValueObject,
} from '@app/modules/shared/uuid';

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
