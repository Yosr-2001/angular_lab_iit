import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Member } from 'src/modeles/Member';
import { Pub } from 'src/modeles/Pub';

// le decorateur Injectable indique que le service peut etre injecter sans un autre services ou un composant
@Injectable({
  providedIn: 'root'
})
export class MemberService {
  tabRecup:   any[] = [];
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
}

affectMemberToEvent(idPub:string,idMember:string)
{

  this.getMemberByID(idMember).subscribe((M) => {
    

    this.tabRecup = M.tabPubs;
    this.tabRecup.push(idPub);


  return this.http.patch<void>(`http://localhost:3000/members/${idMember}`,{tabPub:this.tabRecup}) 
}
); 
}
}
