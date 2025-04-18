import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Member } from 'src/modeles/Member';
import { MemberService } from 'src/services/member.service';

@Component({
  selector: 'app-modal-member',
  templateUrl: './modal-member.component.html',
  styleUrls: ['./modal-member.component.css']
})
export class ModalMemberComponent implements OnInit {
  members: Member[] = [];
  selectedValue: string = "";
  form!: FormGroup;

  constructor(private MS: MemberService, private dialogRef: MatDialogRef<ModalMemberComponent>) { }

  ngOnInit(): void {
    this.MS.GetAllMembers().subscribe((a) => { 
      this.members = a;
      });
    this.form = new FormGroup({
      idMember: new FormControl(),
    });
    ;
    console.log(this.members);
  }

  save() {
    this.dialogRef.close(this.form.value);
  }

  close() {
    this.dialogRef.close();
  }
}