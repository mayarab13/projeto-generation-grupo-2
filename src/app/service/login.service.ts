import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../model/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  fazerLogin(login: Login){

    return this.http.post("http://cloud.professorisidro.com.br:8088/usuario/login", login)
  }
}
