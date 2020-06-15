import { Component } from '@angular/core';
import { AuthentificationService } from '../services/authentification.service';


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
  constructor(public authService : AuthentificationService) {}

  authConnexion(user) {

  this.authService.signInUser(user.email, user.password)
      .then((data) => {
        if (data.user.uid) {
          //this.auth.ToastNotification('Vous étes connecté !');
         // this.route.navigate(['accueil']);
           this.test = "MAND LE IZY AH";

        } else {
          
          this.test = "TSY MAND LE IZY AH";
          this.user = {
            email: '', password: ''
          }
         // this.route.navigate(['home']);
        }
      });
  }
}
