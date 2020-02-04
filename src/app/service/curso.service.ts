import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Curso } from '../model/curso';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get("http://localhost:8080/curso");
  }

  getById(id: number) {
    return this.http.get(`http://localhost:8080/curso/${id}`);
  }

  insert(curso: Curso) {
    return this.http.post(`http://localhost:8080/curso`, curso);
  }
  
  update(curso: Curso) {
    return this.http.put(`http://localhost:8080/curso`, curso);
  }
}
