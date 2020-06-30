import { Injectable } from '@angular/core';

import {AngularFireAuth} from '@angular/fire/auth';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor(private authFire : AngularFireAuth,public Toast :ToastController) { }

    /*===================CONNEXION==================== */
    signInUser(email,password) {
      return  this.authFire.signInWithEmailAndPassword(email, password);
       
    }
  
  /*===================CREATION==================== */
  createNewUser(email: string, password: string) {
    return this.authFire.createUserWithEmailAndPassword(email, password);
  }

  /*====verifier si le token ID session existe toujours======*/
  verifierAuth() {
    return this.authFire.authState;
  }
  /*===================DECONNEXION==================== */
  signOutUser() {
    this.authFire.signOut();
  }
  /*NOTIFiCATION */
  async ToastNotification(textToast: string) {
    const toast = await this.Toast.create({
      message: textToast,
      duration: 5000
    });
    toast.present();
  }
}
