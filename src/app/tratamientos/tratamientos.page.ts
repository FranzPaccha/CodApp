import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tratamientos',
  templateUrl: './tratamientos.page.html',
  styleUrls: ['./tratamientos.page.scss'],
})
export class TratamientosPage implements OnInit {

  
  constructor() { }
  
  ngOnInit() {
    document.getElementById("fiebre").style.display="none";
    document.getElementById("tos").style.display="none";
    document.getElementById("cans").style.display="none";
    document.getElementById("dg").style.display="none";
    document.getElementById("dc").style.display="none";
    document.getElementById("dpr").style.display="none";
    document.getElementById("nutri").style.display="none";
  }
  
  mostrarNutri(){
    document.getElementById("nutri").style.display="block";
  }
  mostrarFiebre(){
    document.getElementById("fiebre").style.display="block";
  }

  mostrarTos(){
    document.getElementById("tos").style.display="block";
  }
  mostrarCans(){
    document.getElementById("cans").style.display="block";
  }

  mostrarDg(){
    document.getElementById("dg").style.display="block";
  }
  mostrarDc(){
    document.getElementById("dc").style.display="block";
  }
  mostrarDpr(){
    document.getElementById("dpr").style.display="block";
  }
 


}
export class OpTratamientos{

}

