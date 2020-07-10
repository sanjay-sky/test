import { Component, OnInit } from '@angular/core';

@Component({
  selector: ' app-registrationform',
  templateUrl: './registrationform.component.html',
  styleUrls: ['./registrationform.component.css']
})
export class RegistrationformComponent implements OnInit {

  constructor() { }
  public emailError =false;
  public passwordError=false;

  public verifyEmail(email){
    let atPos= email.indexOf('@');
    let dotPos= email.lastIndexOf('.');
    if(atPos<=2 && (dotPos-atPos)<=1){
      this.emailError=true;
    }
    else{
      this.emailError=false;
    }
  }
 

  ngOnInit(){}
    }

  


