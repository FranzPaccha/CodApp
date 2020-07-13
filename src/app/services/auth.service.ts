import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from "@angular/router";
import { AngularFirestore } from "@angular/fire/firestore";
import{GooglePlus}from "@ionic-native/google-plus/ngx";
import { auth } from 'firebase';
import { resolve } from 'url';
import{promise} from "protractor"

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private AFauth : AngularFireAuth, private router : Router, private db : AngularFirestore, private google: GooglePlus) { }

  login(email:string, password:string){

    return new Promise((resolve, rejected) =>{
      this.AFauth.auth.signInWithEmailAndPassword(email, password).then(user => {
        resolve(user);
      }).catch(err => rejected(err));
    });

   
  }

  logout(){
    this.AFauth.auth.signOut().then(() => {
      this.google.disconnect();
      this.router.navigate(['/login']);
    })
  }

  register(email : string, password : string){
    return new Promise((resolve,reject) => {
      this.AFauth.auth.createUserWithEmailAndPassword(email, password).then(res =>{
        resolve(res)
      }).catch(err => reject(err))
    })
  }

  loginWithGoogle(){
      return this.google.login({}).then(result=>{
        const userDataGoogle = result;
        return this.AFauth.auth.signInWithCredential(auth.GoogleAuthProvider.credential(null,userDataGoogle.accessToken))
      })
  }

}