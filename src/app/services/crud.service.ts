import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireStorage} from '@angular/fire/storage';
import { Ienfant,INoteEnfant } from '../interface/Ienfant';
import { ModalController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class CrudService {
  enfantTmpl: Ienfant;
  noteTmpl: INoteEnfant;
  uid: any;
  listS: any;
  resultat: any;
  // Collection
  tParents: any = 'tparents/';
  tEnfants: any = 'tenfant/';
  tNotes: any = 'tnotes/';
  tNote: any = 'templateNote/';
  tUid = "_uid";

  constructor(public adb: AngularFireDatabase, public modalCtrl: ModalController, public adS : AngularFireStorage) {
    this.uid = localStorage.getItem('uid');
  }

  /*catch tous les erreurs*/
  log(erreur) {
    return this.adb.list('tlog').push(erreur);
  }
  //template
  templateCarnet() {
    return this.adb.list(this.tNote + this.tUid).snapshotChanges(['child_added', 'child_removed', 'child_changed']);
  }
  checkerNote(key, check) {
   this.adb.object(this.tNote + this.tUid + "/" + key + "/check/").set(check);
  }

  checkerEnfant(keyNew,keyOld) {
    
   this.adb.object(this.tEnfants + this.uid+"/" + keyNew + "/checked/").set("true");
   return this.adb.object(this.tEnfants + this.uid+ "/" + keyOld + "/checked/").set("false");
  
  }
  getImageFirebase (refImage){ 
    return this.adS.ref(refImage).getDownloadURL();
  }

  // ENFANTS --------------------------
  //ajouter enfant dans la liste
  AjouterEnfant(enfantTmpl) {
    return this.adb.list(this.tEnfants + this.uid).push(enfantTmpl);
  }

  ajoutNoteEnfant (key,noteTmpl){
    return this.adb.list(this.tNotes + this.uid +"/"+ key).push(noteTmpl);
  }

  listeAllEnfants() {
    return this.adb.list(this.tEnfants + this.uid).snapshotChanges(['child_added', 'child_removed', 'child_changed']);
  }
  supprimerEnfant(key) {
    return this.adb.list(this.tEnfants + this.uid).remove(key);
  }
  // a propos AGE  ================
  listeAges() {
    return this.adb.list(this.tEnfants + this.uid).snapshotChanges(['child_added', 'child_removed', 'child_changed']);
  }

  calculAge(dateNaissance) {
    let today: any = new Date();
    let selecDate: any = new Date(dateNaissance);
    let age = Math.round((Math.abs(today - selecDate) / (24 * 60 * 60 * 1000)) / 365);
    let age_1 = 'an ';
    let age_plus = 'ans ';
    if (age < 1) {
      let mois = today.getMonth() - selecDate.getMonth();
      this.resultat = mois + " mois";
    } else {
      let mois = today.getMonth() - selecDate.getMonth();
      if (mois < 1 && age == 1) { this.resultat = age + age_1; }
      else if (mois < 1 && age > 1) { this.resultat = age + age_plus }
      else { this.resultat = age + age_plus + mois + " mois"; };
    }
    return this.resultat;
  }


}

//===================================



