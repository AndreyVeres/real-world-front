import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export abstract class ApiService {
  private readonly http = inject(HttpClient);

  protected get<D>(url: string): Observable<D> {
    return this.http.get<D>(url);
  }

  protected post<D, B>(url: string, body: B): Observable<D> {
    return this.http.post<D>(url, body);
  }
}
