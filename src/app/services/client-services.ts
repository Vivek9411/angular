import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APIResponseModel } from '../model/interface/role';
import { Observable } from 'rxjs';
import { clientClass } from '../model/class/Client';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})



export class ClientService {
  constructor(private http:HttpClient){}
  getAllClients():Observable<APIResponseModel>
  {
    return this.http.get<APIResponseModel>(environment.API_URL+'GetAllClients')
  }

  addUpdate(obj:clientClass):Observable<APIResponseModel>
  {
    return this.http.post<APIResponseModel>(environment.API_URL+'AddUpdateClient',obj)
  }

  deleteClientById(id:number):Observable<APIResponseModel>
  {
    return this.http.delete<APIResponseModel>(environment.API_URL+'DeleteClientByClientId?clientId='+id)
  }
}
