import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import IHttp from './http.interface';

@Injectable({
  providedIn: 'root'
})
export class HttpService implements IHttp {

  private url: string = environment.API_URL;
  private httpClient = inject(HttpClient);

  // Método para realizar uma requisição GET
  get(endPoint: string, options?: any): Observable<any> {
    return this.httpClient.get(this.url + endPoint, options);
  }

  // Método para realizar uma requisição POST
  post(endPoint: string, body: any, options?: any): Observable<any> {
    return this.httpClient.post(this.url + endPoint, body, options);
  }

  // Método para realizar uma requisição PUT
  put(endPoint: string, body: any, options?: any): Observable<any> {
    return this.httpClient.put(this.url + endPoint, body, options);
  }

  // Método para realizar uma requisição DELETE
  delete(endPoint: string, options?: any): Observable<any> {
    //console.log('delete', {url: this.url + endPoint, options})
    return this.httpClient.delete(this.url + endPoint, options);
  }
}
