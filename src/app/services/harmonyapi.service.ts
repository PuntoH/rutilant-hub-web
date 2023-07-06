import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HarmonyapiService {

  constructor(private http: HttpClient) { }

  private url = 'https://rpc.ankr.com/harmony';



  makeRPCJSONCall(param: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    const requestBody = {
      jsonrpc: '2.0',
      method: 'hmy_getValidatorInformation',
      params: ["one1p7hpxunckupkdwsytjetnd95tqe3pnsccpw4uu"],
      id: 1,
    };

    return this.http.post<any>(this.url, requestBody, { headers });
  }

}
