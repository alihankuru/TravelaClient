import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { api } from '../constants';
import { ErrorService } from './error.service';
import { ResultModel } from '../model/result.model';
import { Observable, catchError } from 'rxjs';
import { AboutModel } from '../model/about.model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private apiUrl = 'https://localhost:7108/api/Abouts';

  constructor(
    private http: HttpClient,

    private error: ErrorService
  ) { }


  post<T>(apiUrl: string, body: any, callBack: (res: T) => void, errorCallBack?: () => void) {
    this.http.post<ResultModel<T>>(`${api}/${apiUrl}`, body).subscribe({
      next: (res) => {
        if (res.data) {
          callBack(res.data); // If successful, invoke the callback function with the response data
        }
      },
      error: (err: HttpErrorResponse) => {
        this.error.errorHandler(err); // Handle error using an error handler service (assuming it exists)
        if (errorCallBack) {
          errorCallBack(); // If provided, invoke the error callback function
        }
      }
    });
  }
  


  getAboutList(): Observable<any[]> {
    return this.http.post<any[]>(`${this.apiUrl}/AboutList`, {});

  }

  deleteAbout(id: number): Observable<any> {
    const url = `${this.apiUrl}/DeleteAbout/${id}`;
    // Make sure to not set Content-Type header for DELETE requests
    return this.http.delete(url);
  }
  
  updateAbout(aboutData: any): Observable<any> {
    return this.http.put<any>(this.apiUrl, aboutData)
      .pipe(
        catchError((error) => {
          throw error; // Handle errors as per your application's needs
        })
      );
  }
  
}