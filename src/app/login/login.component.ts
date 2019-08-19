import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';

import {ControlValidateService} from '../shared/services/control-validate.service';
import {SubmitService} from '../shared/services/submit.service'




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    login: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private formBuilder: FormBuilder,
              private controlValidate : ControlValidateService, 
              private submitservice : SubmitService ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      'login' : ['', [
        Validators.required,
        this.controlValidate.getValidator()
      ]],
      'password': ['', [
        Validators.required, 
        Validators.minLength(4)]
      ]
    })
    
  }
  
  onLoginSubmit(){
    this.submitservice.onSubmit('https://localhost:4200/api/login',this.loginForm.value)
      .subscribe(
        data => console.log('success', data),
        error => this.submitservice.openDialog(error)
      )
  }
  
  getErrorMessage(key: string){
    const field = this.loginForm.get(key);
    return this.controlValidate.getErrorMessage(key, field);
  }

}
