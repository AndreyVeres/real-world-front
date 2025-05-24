export class EmptyString extends Error {
  constructor() {
    super();
    this.name = 'EmptyString';
    this.message = 'String could not be empty';
  }
}

export function validateStringNotEmpty(value: string): boolean {
  return value.length > 0;
}

import { v4 as uuid4 } from 'uuid';
import { Equatable } from './entity';

export abstract class ValueObject<T> implements Equatable {
  protected abstract _value: T;

  get value(): T {
    return this._value;
  }

  equalsTo(objectToCompare: this): boolean {
    return this.value === objectToCompare.value;
  }
}

export class UniqueId extends ValueObject<string> {
  protected _value: string;

  constructor(uniqueId: string) {
    super();

    if (!validateStringNotEmpty(uniqueId)) {
      throw new EmptyString();
    }

    this._value = uniqueId;
  }

  static generate(): UniqueId {
    return new UniqueId(uuid4());
  }
}
