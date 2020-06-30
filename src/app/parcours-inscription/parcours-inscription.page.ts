import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parcours-inscription',
  templateUrl: './parcours-inscription.page.html',
  styleUrls: ['./parcours-inscription.page.scss'],
})
export class ParcoursInscriptionPage implements OnInit {
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };
  constructor(public router : Router) { }

  ngOnInit() {
  }
  redirection_tableau(){
    this.router.navigate(['accueil']);
  }

}
