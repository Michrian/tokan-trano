import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../services/authentification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.page.html',
  styleUrls: ['./inscription.page.scss'],
})
export class InscriptionPage implements OnInit {
  textToast: any;
  user = {
    email: '',
    password: '',
    confirmpassword: ''
  }
  constructor(private router : Router,private authService:AuthentificationService) { }

  ngOnInit() {
  }

   //==============================
   CreerCompte(user) {
    if (user.password == user.confirmpassword) {
     this.authService.createNewUser(user.email, user.password)
       .then(
         data => {
           this.authService.verifierAuth().subscribe(conx => {
               localStorage.setItem('email',conx.email);
               localStorage.setItem('uid',conx.uid);
               this.authService.ToastNotification("Compte crée, Bienvenue "+conx.email);
               this.router.navigate(['parcours-inscription']);
           });

         })
       .catch(err => {
         let log = "date :" + Date.now() + "/Fn enregistrement parent > " + err;
       //  this.authService.log(log);
         this.authService.ToastNotification("Une erreur est survenue");
       })
   } else {
     this.authService.ToastNotification('Les mot de passe n\'est pas identique');
   }
 }

}
