  import { Component, OnInit } from '@angular/core';
  import { AuthService } from "../services/auth.service";
import { templateJitUrl } from '@angular/compiler';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private authservice: AuthService) { }

  ngOnInit() {
  }
  logout(){
    this.authservice.logout();
  }

  slides =[
    {
      img: 'assets/icon/fiebre.svg', 
      titulo: 'Fiebre'
    },
    {
      img: 'assets/icon/tos.svg', 
      titulo: 'Tos seca'
    },
    {
      img: 'assets/icon/cansado.svg', 
      titulo: 'Cansancio'
    }
  ];

}
