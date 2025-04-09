import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { MemberService } from 'src/services/member.service';

@Component({
  selector: 'app-member-form',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.css']
  
})

export class MemberFormComponent implements OnInit {
  constructor(private MS:MemberService,private router:Router,private activatedRoute:ActivatedRoute) { }
  form!:FormGroup
  ngOnInit(): void {
    const idCourant= this.activatedRoute.snapshot.params['id']
    console.log(idCourant)
    if(idCourant)
    {
      this.MS.getMemberByID(idCourant).subscribe((data)=>{
        this.form = new FormGroup({
          cin:new FormControl(data.cin,[Validators.required]),
          name:new FormControl(data.name,[Validators.required]),
          type:new FormControl(data.type,[Validators.required]),
          createdDate:new FormControl(data.createdDate,[Validators.required]), 
        })}) 
    }
    else
    {
      this.form = new FormGroup({
        cin:new FormControl(null,[Validators.required]),
        name:new FormControl(null,[Validators.required]),
        type:new FormControl(null,[Validators.required]),
        createdDate:new FormControl(null,[Validators.required]),
      })

    }
    }
onSub(): void {
  const idCourant = this.activatedRoute.snapshot.params['id'];
  if (idCourant) {
    this.MS.editMember(idCourant, this.form.value).subscribe(() => {
      this.router.navigate(['']);
    });
  } else {
    this.MS.addMember(this.form.value).subscribe(() => {
      this.router.navigate(['']);
    });
  }
}

}
