import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class AssetReqService {
  private baseUrl = environment.baseApi;

  constructor(private _http: HttpClient) {}

  getRates(): Observable<any> {
    const url: string = this.baseUrl + 'exchange_rates'
    return this._http.get<Observable<any>>(url);
  }

 }
