import { Injectable } from '@angular/core';

import {AngularFireAuth} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor(private authFire : AngularFireAuth) { }

    /*===================CONNEXION==================== */
    signInUser(email,password) {
      return  this.authFire.signInWithEmailAndPassword(email, password);
       
    }
  
}
