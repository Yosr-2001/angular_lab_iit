import { Component, Inject, inject } from '@angular/core';
import { ModalEventComponent } from '../modal-event/modal-event.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EventService } from 'src/services/event.service';
import { Evt } from 'src/modeles/Evt';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent 
{
  EvtGlobal!:Evt
  constructor(public dialogRef:MatDialogRef<EventDetailsComponent>,@Inject(MAT_DIALOG_DATA)data:any,public ES:EventService)  
  {
    this.ES.getEventById(data).subscribe((a)=>{this.EvtGlobal=a})
    

  }

}
