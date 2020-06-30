import { Component, OnInit, ViewChild } from '@angular/core';
import { INoteEnfant } from '../../../interface/Ienfant';
import { CrudService } from 'src/app/services/crud.service';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { FormAjoutEnfantPage } from 'src/app/Modal/form-ajout-enfant/form-ajout-enfant.page';
import { FormAjoutRoutinePage } from 'src/app/Modal/form-ajout-routine/form-ajout-routine.page';
import { ModalController, IonSlides } from '@ionic/angular';
import { ParametrePage } from 'src/app/parametre/parametre.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enfant',
  templateUrl: './enfant.page.html',
  styleUrls: ['./enfant.page.scss'],
})
export class EnfantPage implements OnInit {

  @ViewChild(IonSlides) slides: IonSlides;

  listeEnfants = [];
  tabTemplate = [];
  isShow = true;
  img;email;
  maxDate: any;
  myObj = { nom: '', datenaissance: '', checked: false };
  objEnfantParDefaut = { key: '', nom: '', ages: '' };
  formNote = { aujourdhui: '', heure: '', biberon: '', selles: false, urine: false, temperature: '', commentaire: '' };
  
  slideOpts = {
    initialSlide:0,
    scrollbar:false,
    speed: 400
  };
  
  constructor(public crudService: CrudService, public modalCtrl: ModalController, public authService: AuthentificationService, public router :Router) {
    this.email = localStorage.getItem('email');
    this.listeAllEnfants();
    this.afficherNote();
    this.formNote.aujourdhui = new Date().toISOString();
    this.formNote.heure = new Date().toISOString();
    this.imageAvatar();
  }

  addNote(formNote: INoteEnfant) {
    if (formNote.biberon || formNote.selles || formNote.urine || formNote.temperature) {
      let key = this.objEnfantParDefaut.key;
      let heure=new Date(formNote.heure).getHours();
      let min=new Date(formNote.heure).getMinutes();
      this.formNote.heure = heure +":"+min;
      this.crudService.ajoutNoteEnfant(key, formNote);
      this.formNote = { aujourdhui: this.formNote.aujourdhui, heure: this.formNote.heure, biberon: '', selles: false, urine: false, temperature: '', commentaire: '' };
      this.authService.ToastNotification('Enregistrement effectué');       
    } else {
    this.authService.ToastNotification('Au moins une tache selectionner');
    }
  }

  action(){
    this.slides.slideTo(1,500);
  }
  slidePrev(){
    this.slides.slideTo(0,500);
  }
  afficherDivParametre() {
    this.isShow = !this.isShow;
  }

  ngOnInit() {

  }



  listeAllEnfants() {
    this.crudService.listeAllEnfants().subscribe(
      result => {
        this.listeEnfants = [];
        result.forEach(
          p => {
            if (result.length < 2) {
              this.objEnfantParDefaut = {
                key: p.key,
                nom: p.payload.exportVal().nom,
                ages: p.payload.exportVal().ages
              }
            } else {
              if (p.payload.exportVal().checked == "true") {
                this.objEnfantParDefaut = {
                  key: p.key,
                  nom: p.payload.exportVal().nom,
                  ages: this.crudService.calculAge(p.payload.exportVal().datenaissance)
                }
              }

              this.listeEnfants.push({
                key: p.key, nom: p.payload.exportVal().nom, ages: p.payload.exportVal().ages
              });
            }

          }
        )
      });
  }

  afficherNote() {
    this.crudService.templateCarnet().subscribe(
      data => {
        data.forEach(res => {
          this.getImages(res);
        });
      });
  }
  selectEnfant(keyNew, keyOld) {

    if (keyNew != keyOld) {
      this.crudService.checkerEnfant(keyNew, keyOld)
    }

  }

  getImages(resultat: any) {
    const ref = resultat.payload.exportVal().url;
    this.tabTemplate = [];
    this.crudService.getImageFirebase(ref).subscribe(
      image => {
        let tache = resultat.payload.exportVal().check;
        if (tache == true) {
          this.tabTemplate.push({
            key: resultat.key,
            type: resultat.payload.exportVal().type,
            check: resultat.payload.exportVal().check,
            ref: image
          });

        }
      }
    )
  }


  async formAjoutRoutine() {
   // this.isShow = !this.isShow;
    const modal = await this.modalCtrl.create({
      component: FormAjoutRoutinePage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

  async formAjoutEnfant() {
    //this.isShow = !this.isShow;
    /*========MODAL========*/
    const modal = await this.modalCtrl.create({
      component: FormAjoutEnfantPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();

  }

  imageAvatar (){
    this.crudService.getImageFirebase("images/avatar_ninja.png").subscribe(
      image=>{
        this.img = image;
      }
    )
  }

  async parametre() {
    const modal = await this.modalCtrl.create({
      component: ParametrePage,
      cssClass: 'my-custom-class',
      componentProps: {
        'firstName': 'Douglas',
        'lastName': 'Adams',
        'middleInitial': 'N'
      }
    });
    return await modal.present();
  }

  ajouterRoutine() {
    this.router.navigate(['routine']);
  }


}//fin
