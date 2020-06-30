import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AuthentificationService } from '../services/authentification.service';
import { Router } from '@angular/router';
import { CrudService } from '../services/crud.service';


@Component({
  selector: 'app-parametre',
  templateUrl: './parametre.page.html',
  styleUrls: ['./parametre.page.scss'],
})
export class ParametrePage implements OnInit {

  constructor(public crudService: CrudService,private modalCtrl :ModalController,private route: Router,private authService: AuthentificationService)
  {
  }
  
  ngOnInit() {
  }
  
 
  deconnecter (){
    this.modalCtrl.dismiss();
    this.authService.signOutUser();
    this.route.navigate(['home']);
  }


  async fermerParametre (){
    this.modalCtrl.dismiss();
   }

}
