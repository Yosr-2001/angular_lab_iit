import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Evt } from 'src/modeles/Evt';
import { EventService } from 'src/services/event.service';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { ModalEventComponent } from '../modal-event/modal-event.component';
import { EventDetailsComponent } from '../event-details/event-details.component';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})

export class EventsComponent implements OnInit {

  constructor(private ES: EventService,private dialog:MatDialog ) { }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  @ViewChild(MatSort) sort!: MatSort;

  // dataSource: Evt[] = [];
  dataSource!: MatTableDataSource<any>;

  displayedColumns: string[] = ['id','titre', 'dateDebut', 'dateFin', 'lieu','6'];

  ngOnInit() {
    this.fetchData();
  }

  fetchData(): void {
    this.ES.GetAllEvents().subscribe((a) => {
      // this.dataSource = a
      console.log("a ici ",a);
      this.dataSource = new MatTableDataSource(a);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;


    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  
open(): void {
  const dialogRef = this.dialog.open(ModalEventComponent, {
    width: '400px'

  });
  dialogRef.afterClosed().subscribe((result) => {
    if (result) {
      this.ES.addEvent(result).subscribe(() => {
        this.fetchData();
      });
    }
  });

}
open1(id: string): void {
  const dialogConfig = new MatDialogConfig();
  //chercher event by id
  this.ES.getEventById(id).subscribe((res) => {
    dialogConfig.data = res;
    const dialogRef = this.dialog.open(ModalEventComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((result) => {
      this.ES.updateEvent(id,result).subscribe(() => {
        this.fetchData();
      });
    });


  });

}
openVis(id: string): void 
{
  const dialogConfig = new MatDialogConfig();
    dialogConfig.data = id;
    this.dialog.open(EventDetailsComponent, dialogConfig)
  
}
  delete(id: string): void {
    let dialogRef = this.dialog.open(ConfirmDialogComponent, {
      height: '250px',
      width: '350px',
    });
    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        this.ES.deleteEvent(id).subscribe(() => {
          this.fetchData();
        });
      }
    });
  }

}