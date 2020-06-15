import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GitOperationsService {
  url : string = 'https://api.github.com/users/technoweenie/repos'
  constructor(private http:HttpClient) { }

  getRepos(): Observable<any>{
    return this.http.get(this.url);
  }
}
