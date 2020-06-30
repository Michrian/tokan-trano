import { Component, OnInit, Input } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import { Ienfant } from 'src/app/interface/Ienfant';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-form-ajout-enfant',
  templateUrl: './form-ajout-enfant.page.html',
  styleUrls: ['./form-ajout-enfant.page.scss'],
})
export class FormAjoutEnfantPage implements OnInit {
  listeEnfants = [];
  @Input() firstName: string;
  @Input() lastName: string;
  @Input() middleInitial: string;
  aujourdhui; selectDatenaissance;
  resulatAge: any = ''; show: boolean = true;
  myObj = { nom: '', datenaissance: '', checked: false };
  constructor(public authService: AuthentificationService, public crudService: CrudService, public modalCtrl: ModalController) {
    this.aujourdhui = new Date().toISOString();
  }

  ngOnInit() {
    this.afficheAge();
  }

  deleteEnfant(key) {
    this.crudService.supprimerEnfant(key);
  }



  btnAjoutEnfant(obj: Ienfant) {
    
    this.crudService.AjouterEnfant(obj).then(data => {

      if (data) {
        this.authService.ToastNotification('Enregistrement effectué');
        this.myObj = { nom: '', datenaissance: '', checked: false };
        this.show = true; this.resulatAge=0;
      } else {
        this.authService.ToastNotification('Enregistrement non effectué');
      }

    })
      .catch(err => {
        let log = "date :" + Date.now() + "/Fn enregistrement parent > " + err;
        this.crudService.log(log);
      })
  }

  fermerModal() {
    this.modalCtrl.dismiss();
  }

  afficheAge() {
    this.crudService.listeAges().subscribe(
      result => {
        this.listeEnfants = [];
        result.forEach(
          p => {
            
              this.listeEnfants.push({
                key: p.key, nom: p.payload.exportVal().nom, datenaissance: this.crudService.calculAge(p.payload.exportVal().datenaissance)
              });
            
          

          }
        )
      });
  }


  calculAge() {
    this.show = false;
    this.resulatAge = this.crudService.calculAge(this.myObj.datenaissance);
  }





}
