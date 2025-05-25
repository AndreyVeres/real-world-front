import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { API_ROUTES } from '@shared/const/api.routes';

@Injectable({
  providedIn: 'root',
})
export class TagsService {
  http = inject(HttpClient);

  getAllTags() {
    return this.http.get<{ tags: string[] }>(API_ROUTES.TAGS);
  }
}
