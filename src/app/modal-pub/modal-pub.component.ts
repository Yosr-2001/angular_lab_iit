import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

interface PublicationType {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-modal-pub',
  templateUrl: './modal-pub.component.html',
  styleUrls: ['./modal-pub.component.css']
})
export class ModalPubComponent implements OnInit {
  form!: FormGroup;

  types: PublicationType[] = [
    { value: 'Conf', viewValue: 'Conf' },
    { value: 'Journal', viewValue: 'Journal' },
    { value: 'Magazine', viewValue: 'Magazine' }
  ];

  constructor(private dialogRef: MatDialogRef<ModalPubComponent>) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      id: new FormControl(),
      type: new FormControl(),
      titre: new FormControl(),
      lien: new FormControl(),
      date: new FormControl(),
      Sourcepdf: new FormControl()
    });
  }

  save() {
    this.dialogRef.close(this.form.value);
  }

  close() {
    this.dialogRef.close();
  }
}
