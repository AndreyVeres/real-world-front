import { Observable, of } from 'rxjs';

export interface Equatable {
  equalsTo(objectToCompare: this): boolean;
}

export abstract class Entity implements Equatable {
  copyWith(properties: Partial<this>): this {
    const copy = new (this.constructor as { new (): never })();
    Object.assign(copy, this, properties);
    return copy;
  }

  asObservable(): Observable<this> {
    return of(this);
  }

  abstract equalsTo(objectToCompare: this): boolean;
}
