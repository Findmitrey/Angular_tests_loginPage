import {Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import {ControlValidateService} from '../shared/services/control-validate.service';
import {SubmitService} from '../shared/services/submit.service'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.sass']
})
export class RegistrationComponent implements OnInit {

  registrationForm = new FormGroup({
    name : new FormControl(''),
    login: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private formBuilder: FormBuilder,
              private controlValidate : ControlValidateService, 
              private submitservice : SubmitService ) { }

  ngOnInit() {
    this.registrationForm = this.formBuilder.group({
      'name' : ['', [
        Validators.required
      ]],
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
  
  onRegistrationSubmit(){
    this.submitservice.onSubmit('https://localhost:4200/api/registration',this.registrationForm.value)
      .subscribe(
        data => console.log('success', data),
        error => this.submitservice.openDialog(error)
      )
  }

  
  getErrorMessage(key: string){
    const field = this.registrationForm.get(key);
    return this.controlValidate.getErrorMessage(key, field);
  }

}
