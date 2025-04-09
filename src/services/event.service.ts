import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Evt } from 'src/modeles/Evt';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http:HttpClient) { }
  GetAllEvents():Observable<Evt[]>
  {
    return this.http.get<Evt[]>('http://localhost:3000/evts')
  }
  deleteEvent(id:string):Observable<void>
{
  return this.http.delete<void>(`http://localhost:3000/evts/${id}`)
}
addEvent(evt:Evt):Observable<Evt>
{
  return this.http.post<Evt>('http://localhost:3000/evts',evt)
}
updateEvent(id:string,evt:Evt):Observable<Evt>
{
  return this.http.put<Evt>(`http://localhost:3000/evts/${id}`,evt)
}
getEventById(id: string): Observable<Evt> {
  return this.http.get<Evt>(`http://localhost:3000/evts/${id}`);
}
}

