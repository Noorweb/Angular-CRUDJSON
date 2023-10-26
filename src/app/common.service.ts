import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
readonly url = "http://localhost:3000/Users/"
  constructor(private http:HttpClient) { }


  AddUpdateUser(data:any):Observable<any>{
    debugger
    return this.http.post(this.url,data);
  }

  GetAllUsers():Observable<any>{
    return this.http.get(this.url);
  }

  DeleteUserByID(ID:number):Observable<any>{
    return this.http.delete(this.url+ID);
  }
}
