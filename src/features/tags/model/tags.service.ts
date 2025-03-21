import { Injectable } from '@angular/core';
import { ApiService } from '@shared/services';
import { API_ROUTES } from '@shared/const/api.routes';
import { Tag } from './tags.types';

@Injectable({
  providedIn: 'root',
})
export class TagsService extends ApiService {
  getAllTags() {
    return this.get<Tag[]>(API_ROUTES.TAGS);
  }
}
