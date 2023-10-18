import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class CommonService {
readonly url = "http://localhost:3000/"
  constructor(private http:HttpClient) { }


  AddUpdateUser(data:any):Observable<any>{
    debugger
    return this.http.post(this.url+"Users",data);
  }

  GetAllUsers():Observable<any>{
    return this.http.get(this.url+"Users");
  }

  DeleteUserByID(ID:number):Observable<any>{
    return this.http.delete(this.url+"Users/"+ID);
  }
}
