import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthentificationService } from '../services/authentification.service';
import { CrudService } from '../services/crud.service';


@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
})

export class AccueilPage implements OnInit {
  
  constructor(public crudService: CrudService,private modalCtrl: ModalController, private route: Router, private authService: AuthentificationService) { 

  }

  ngOnInit() {
  }





}
