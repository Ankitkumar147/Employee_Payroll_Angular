import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs' ;
import { Employee } from '../model/employee';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private baseUrl: string = "https://localhost:8081/employeepayrollservice/";
  
  constructor(private httpClient : HttpClient) {

   }
  
   getEmployeeData(): Observable<any> {
    return this.httpClient.get(this.baseUrl + "get");
  }

  //  addEmployee(body: any):Observable<any>{
  //   return this.httpClient.post(this.baseUrl + "create", body);
  //  }

}

