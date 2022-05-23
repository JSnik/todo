import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {Observable} from 'rxjs';
import {CurrencyModel} from "../modules/shared/currency.model";

@Injectable({
  providedIn: 'root',
})

export class RatesService {
  private baseUrl = environment.baseApi;

  constructor(private _http: HttpClient) {}

  getRates(): Observable<CurrencyModel[]> {
    const url: string = this.baseUrl + 'exchange_rates';
    return this._http.get<CurrencyModel[]>(url);
  }

 }
