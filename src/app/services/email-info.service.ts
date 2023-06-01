//@angular
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//rxjs
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
// models
import { EmailInfo } from '../models/emailInfo.model';

@Injectable({
  providedIn: 'root',
})
export class EmailInfoService {
  //variables
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  private emailInfoUrl: string = 'http://localhost:3000/emailInfo';
  //constructor
  constructor(private http: HttpClient) {}

  // funtions
  addEmailInfo(emailInfo: EmailInfo): Observable<EmailInfo> {
    return this.http
      .post<EmailInfo>(this.emailInfoUrl, emailInfo, this.httpOptions)
      .pipe(catchError(this.handleError<EmailInfo>('addEmailInfo')));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      // this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
} // class End
