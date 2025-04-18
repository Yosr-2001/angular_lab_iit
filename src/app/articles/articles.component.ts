import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Pub } from 'src/modeles/Pub';
import { PubService } from 'src/services/pub.service';
import { ModalEventComponent } from '../modal-event/modal-event.component';
import { MatDialog } from '@angular/material/dialog';
import { ModalPubComponent } from '../modal-pub/modal-pub.component';
import { ModalMemberComponent } from '../modal-member/modal-member.component';
import { MemberService } from 'src/services/member.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  constructor(private MS:MemberService, private PS: PubService, private dialog: MatDialog,) { }
  dataSource!: MatTableDataSource<any>;
  displayedColumns: string[] = ['id', 'type', 'titre', 'lien', 'date', 'Sourcepdf', '6'];
  ngOnInit() {
    this.fetchData();
  }
  fetchData(): void {
    this.PS.GetAllPub().subscribe((a) => {
      this.dataSource = new MatTableDataSource(a);
    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  open(): void {
    let dialogRef = this.dialog.open(ModalPubComponent, {
      width: '400px'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.PS.AddPub(result).subscribe(() => {
          this.fetchData();
        });
      }
    });

  }
  openAffect(idPub:string): void {
    let dialogRef = this.dialog.open(ModalMemberComponent, {
      width: '400px'
    });
    dialogRef.afterClosed().subscribe((idMember) => {
      this.MS.affectMemberToEvent(idPub, idMember);
    });

  }

}
