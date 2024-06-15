import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { api } from '../constants';
import { ErrorService } from './error.service';
import { ResultModel } from '../model/result.model';
import { Observable } from 'rxjs';
import { AboutModel } from '../model/about.model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private apiUrl = 'https://localhost:7108/api';

  constructor(
    private http: HttpClient,

    private error: ErrorService
  ) { }

  post<T>(apiUrl: string, body: any, callBack: (res: T) => void, errorCallBack?: () => void) {
    this.http.post<ResultModel<T>>(`${apiUrl}`, body, {
      headers: {
        "Authorization": "Bearer " + "this.auth.token "// removed double quotes from "this.auth.token"
      }
    }).subscribe({
      next: (res) => {
        if (res.data) {
          callBack(res.data);
        }
      },
      error: (err: HttpErrorResponse) => {
        this.error.errorHandler(err);
  
        if (errorCallBack) {
          errorCallBack();
        }
      }
    })
  }


  getAboutList(): Observable<any[]> {
    return this.http.post<any[]>(`${this.apiUrl}/Abouts/AboutList`, {});

  }
}