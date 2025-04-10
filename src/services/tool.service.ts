import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tool } from 'src/modeles/Tool';

@Injectable({
  providedIn: 'root'
})
export class ToolService {

  constructor(private http:HttpClient) { }
   GetAllTools():Observable<Tool[]>
      {
        return this.http.get<Tool[]>('http://localhost:3000/tools')
      }
}
