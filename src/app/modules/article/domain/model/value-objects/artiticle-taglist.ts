import { ValueObject } from '@app/modules/shared/uuid';

export class ArticleTagList extends ValueObject<string[]> {
  protected _value: string[];

  public constructor(articleTaglist: string[]) {
    super();

    this._value = articleTaglist;
  }

  public getTags() {
    return [...this.value];
  }
}
