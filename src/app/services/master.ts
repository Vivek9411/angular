import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { APIResponseModel } from '../model/interface/role';

import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class Master {
  constructor(private http:HttpClient){}

  getDesignation():Observable<APIResponseModel>
  {
    return this.http.get<APIResponseModel>(environment.API_URL+"GetAllDesignation")
  }
}

