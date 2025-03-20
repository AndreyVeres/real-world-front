import { Injectable } from "@angular/core";
import { ApiService } from "../../core/services/api.service";
import { API_ROUTES } from "../../api.routes";
import { tap } from "rxjs";
import { Tag } from "./tags.types";

@Injectable({
  providedIn:'root'
})
export class TagsService extends ApiService{
  getAllTags(){
    return this.get<Tag[]>(API_ROUTES.TAGS).pipe(tap((tags) => console.log(tags)))
  }
}
