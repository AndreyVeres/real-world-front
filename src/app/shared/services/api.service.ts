import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import {  Observable } from 'rxjs';
import { env } from '../../../env';

@Injectable({
  providedIn: 'root',
})
export abstract class ApiService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = env.API_PATH

  protected get<T>(url: string): Observable<T> {
    return this.http.get<T>(this.baseUrl + url);
  }

  protected post<T, B>(url: string, body: B): Observable<T> {
    return this.http.post<T>(this.baseUrl + url, body)
  }
}
