import { Component } from '@angular/core';
import { AuthentificationService } from '../services/authentification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  user = {
    email: '', password: ''
  }
  test :any;
  isAuth:any;
  constructor(public authService : AuthentificationService,public router:Router) {


  }

  ngOnInit(){
    this.authService.verifierAuth().subscribe(conx => {
      if (conx) {
        console.log("Connecté");
        this.router.navigate(['accueil']);
        this.isAuth = true;
      } else {
        console.log("Déconnecté");
        this.isAuth = false;
      };
    });
  }
  authConnexion(user) {

  this.authService.signInUser(user.email, user.password)
      .then((data) => {
        if (data.user.uid) {
          this.authService.ToastNotification('Vous étes connecté !');
          this.router.navigate(['accueil']);
        } else {
          this.user = {
            email: '', password: ''
          }
          this.router.navigate(['home']);
        }
      });
  }

  formInscription() {
    this.router.navigate(['/inscription']);
  }
}
