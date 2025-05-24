import { Injectable } from '@angular/core';
import { ApiService } from '@shared/services';
import { API_ROUTES } from '@shared/const/api.routes';

@Injectable({
  providedIn: 'root',
})
export class TagsService extends ApiService {
  getAllTags() {
    return this.get<{ tags: string[] }>(API_ROUTES.TAGS);
  }
}
