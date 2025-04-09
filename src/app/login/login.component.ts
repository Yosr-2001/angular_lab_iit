import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email:string='';
  password:string='';
// injection de dependance
  constructor(private auth:AuthServiceService, private router:Router){}
  sub():void{
    
    console.log("email et password saisie :", this.email,this.password);
    //appel au service AuthServ pour générer le token JWT
    this.auth.signInWithEmailAndPassword(this.email,this.password).then(
      // signInWithEmailAndPassword ma raj3etch observable ==> subscription twali b .then
      //trajaa3 un thread de type promise
      ()=>{
        console.log("login success");
      //action a faire si le login est reussi
      alert("login success");
      //redirect
      this.router.navigate(['/member']);
    }).catch((error) => {
      console.error("Erreur de connexion :", error);
      alert("Échec de la connexion : " + error.message);
    });
  }
     


}
