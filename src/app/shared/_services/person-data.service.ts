import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import ApiUris from '../_constants/ApiUris';
import { IPerson } from '../_models/IPerson.model';
import { IUser } from '../_models/IUser.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonDataService {

  constructor(
    private http: HttpClient
  ) { }

  authenticate(user: IUser): Observable<IPerson> {
    console.log(user);
    return this.http.post<IPerson>(`${environment.apiUrl}${ApiUris.USER_LOGIN}`, user);
  }


  authenticate2(user: IUser): Observable<any> {
    console.log(user);
    return this.http.post<IPerson>(`${environment.apiUrl}${ApiUris.USER_LOGIN}`, user);
  }

  register(person: IPerson): Observable<IPerson> {
    return this.http.post<IPerson>(`${environment.apiUrl}${ApiUris.USER_REGISTER}`, person);
  }

}
