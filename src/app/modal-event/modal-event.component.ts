import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-event',
  templateUrl: './modal-event.component.html',
  styleUrls: ['./modal-event.component.css']
})
export class ModalEventComponent  {
  form!:FormGroup;
  constructor(private dialogRef: MatDialogRef<ModalEventComponent>,
    @Inject(MAT_DIALOG_DATA) data: any) 
    {
      if(data)
      {
        this.form=new FormGroup({
          title:new FormControl(data.title,[Validators.required]),
          datedebut:new FormControl(data.datedebut,[Validators.required]),
          datefin:new FormControl(data.datefin,[Validators.required]),
          lieu:new FormControl(data.lieu,[Validators.required]),
        })
      }
      else
      {
        this.form=new FormGroup({
          title:new FormControl(null,[Validators.required]),
          datedebut:new FormControl(null,[Validators.required]),
          datefin:new FormControl(null,[Validators.required]),
          lieu:new FormControl(null,[Validators.required]),
        })
      }
    }



  
  save() {
    this.dialogRef.close(this.form.value);
}

close() {
    this.dialogRef.close();
}

}
