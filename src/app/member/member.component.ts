import { Component, OnInit } from '@angular/core';
import { Member } from 'src/modeles/Member';
import { MemberService } from 'src/services/member.service';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { Dialog } from '@angular/cdk/dialog';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit{
  //injection de dependance c'est un mecanisme qui permet a un composant d'injecter a un service
  //[service contient le decorateur Injectable]
  constructor(private MS:MemberService,private dialog:MatDialog) { }
  ngOnInit(): void 
  {
    this.MS.GetAllMembers().subscribe((a)=>{this.datasource=a})

  }
  delete(id:string):void
  {//lancer boite 
    //attendre le res de user
    let dialogRef = this.dialog.open(ConfirmDialogComponent, {
      height: '199',
      width: '299',
    });
    dialogRef.afterClosed().subscribe((res) => {
      if(res)
      {
        this.MS.delete(id).subscribe(()=>{this.MS.GetAllMembers().subscribe((a)=>{this.datasource=a})})
      }
    });
    
    
  }

  datasource : Member[] = []
  displayedColumns: string[] = ['id','cin', 'name', 'type','age','6'];

}
