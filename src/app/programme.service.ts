import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProgrammeService {

  private finaldata = [];
  private apiurl = "http://app.joinpuzzle.com/public/api/programmes/";

  constructor(private http: HttpClient) {
    this.getData();
   }
  
  getData() {
    return this.http.get(this.apiurl);
  }
}
