import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Member } from 'src/modeles/Member';
// le decorateur Injectable indique que le service peut etre injecter sans un autre services ou un composant
@Injectable({
  providedIn: 'root'
})
export class MemberService {
  constructor(private http:HttpClient) { }
// fonction qui envoie la requete en mode get 
GetAllMembers():Observable<Member[]>
{
  return this.http.get<Member[]>('http://localhost:3000/members')
}
addMember(member:Member):Observable<void>
{
  return this.http.post<void>('http://localhost:3000/members',member)
}
delete(id:string):Observable<void>
{
  return this.http.delete<void>(`http://localhost:3000/members/${id}`)
}
getMemberByID(id:string):Observable<Member>
{
  return this.http.get<Member>(`http://localhost:3000/members/${id}`)
}
editMember(id:string,member:Member):Observable<void>
{
  return this.http.put<void>(`http://localhost:3000/members/${id}`,member)
}}
