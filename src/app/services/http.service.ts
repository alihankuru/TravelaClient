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
  private apiUrl1 = 'https://localhost:7108/api/';
  constructor(
    private http: HttpClient,

    private error: ErrorService
  ) { }


  post1<T>(apiUrl: string, body: any, callBack: (res: T) => void, errorCallBack?: () => void) {
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
  
  post<T>(apiUrl: string, body: any, callBack: (res: T) => void, errorCallBack?: () => void) {
    this.http.post<ResultModel<T>>(`${api}/${apiUrl}`, body, {
      headers: {
        "Authorization": "Bearer " + "this.auth.token"
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
    });
  }


  getAboutList(): Observable<any[]> {
    return this.http.post<any[]>(`${this.apiUrl}/AboutList`, {});

  }

  getFeatureList(): Observable<any[]> {
    return this.http.post<any[]>(`${this.apiUrl1}Features/FeatureList`, {});

  }

  getDestinationList(): Observable<any[]> {
    return this.http.post<any[]>(`${this.apiUrl1}Destination/DestinationList`, {});

  }

  getServiceList(): Observable<any[]> {
    return this.http.post<any[]>(`${this.apiUrl1}Services/ServiceList`, {});

  }

  getPackageList(): Observable<any[]> {
    return this.http.post<any[]>(`${this.apiUrl1}Packages/PackageList`, {});

  }

  getTeamList(): Observable<any[]> {
    return this.http.post<any[]>(`${this.apiUrl1}Guides/GuideList`, {});

  }

  getCarouselList(): Observable<any[]> {
    return this.http.post<any[]>(`${this.apiUrl1}Carousels/CarouselList`, {});

  }

  getFooterList(): Observable<any[]> {
    return this.http.post<any[]>(`${this.apiUrl1}Footers/FooterList`, {});

  }

  deleteFeature(id: number): Observable<any> {
    const url = `${this.apiUrl1}Features/DeleteFeature/${id}`;
    // Make sure to not set Content-Type header for DELETE requests
    return this.http.delete(url);
  }

  deleteDestination(id: number): Observable<any> {
    const url = `${this.apiUrl1}Destination/DeleteDestination/${id}`;
    // Make sure to not set Content-Type header for DELETE requests
    return this.http.delete(url);
  }

  deleteService(id: number): Observable<any> {
    const url = `${this.apiUrl1}Services/DeleteService/${id}`;
    // Make sure to not set Content-Type header for DELETE requests
    return this.http.delete(url);
  }

  deletePackage(id: number): Observable<any> {
    const url = `${this.apiUrl1}Packages/DeletePackage/${id}`;
    // Make sure to not set Content-Type header for DELETE requests
    return this.http.delete(url);
  }

  deleteTeam(id: number): Observable<any> {
    const url = `${this.apiUrl1}Guides/DeleteGuide/${id}`;
    // Make sure to not set Content-Type header for DELETE requests
    return this.http.delete(url);
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