import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-form-ajout-routine',
  templateUrl: './form-ajout-routine.page.html',
  styleUrls: ['./form-ajout-routine.page.scss'],
})
export class FormAjoutRoutinePage implements OnInit {
  tabTemplate = [];
  constructor(public crudService: CrudService, public modalCtrl: ModalController) {
    this.afficherNote();

  }


  Checker(p) {
    this.crudService.checkerNote(p.key, p.check);
  }
  ngOnInit() {

  }

  afficherNote() {
    this.crudService.templateCarnet().subscribe(
      data => {
        data.forEach(res => {
          this.getImages(res);
        });
      });
  }

  getImages(resultat: any) {
    const ref = resultat.payload.exportVal().url;
    this.tabTemplate = [];
    this.crudService.getImageFirebase(ref).subscribe(
      image => {
        this.tabTemplate.push({
          key: resultat.key,
          check: resultat.payload.exportVal().check,
          ref: image
        });

      }
    )
  }




  fermerModal() {
    this.modalCtrl.dismiss();
  }

}
