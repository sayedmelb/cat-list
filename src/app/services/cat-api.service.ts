import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';
import { OwnerPet } from '../model/owner.pet';

@Injectable({
  providedIn: 'root'
})
export class CatApiService {

  private httpHeaders = {
    headers: new HttpHeaders({
      "Content-type": "application/json",
      Accept: "application/json",
      Authorisation: "No Auth",
    }),
  };
  

  public getCatListing(): Observable<OwnerPet[]> {
    var url = this.api_url; 
   // return this.http.get<any>(url,this.httpHeaders);
   return this.http.get<OwnerPet[]>(url);
  }
  
  constructor(private http: HttpClient) { }
  private api_url = `${environment.CAT_URL}` + `${environment.CAT_ENDPOINT}`
}
