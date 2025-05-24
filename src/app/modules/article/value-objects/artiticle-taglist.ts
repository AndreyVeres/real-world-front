import {
  EmptyString,
  validateStringNotEmpty,
  ValueObject,
} from '@app/modules/shared/uuid';

export class ArticleTagList extends ValueObject<string[]> {
  protected _value: string[];

  constructor(articleTaglist: string[]) {
    super();

    this._value = articleTaglist;
  }
}
