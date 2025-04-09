import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/services/auth-service.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {
  isLogin:boolean=false;

  constructor(private auth: AuthServiceService, private route: Router) { }
  ngOnInit(): void {
    //souscrit sur les routes
    // si la route contient /login => true
    // prb : loginPage contient le sidebar  !!!  c faux
    this.route.events.subscribe(() => {
      this.isLogin = this.route.url.includes('/login'); // Vérifie si l'URL contient "/login"
    console.log("isLogin",  this.isLogin )
    });
  }
  logout(): void {
    console.log('User is logging out');
    this.auth.signOut().then(() => {
      console.log('Sign-out successful.');
      // Redirect to the login page or perform any other action
      this.route.navigate(['/login']);
    }
    ).catch((error) => {
      console.error('Sign-out error:', error);
    });

  }

}
