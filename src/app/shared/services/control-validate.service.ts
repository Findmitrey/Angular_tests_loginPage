import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

interface IErrMsg {
  [key : string] : {[key: string] : string}
}

@Injectable({
  providedIn: 'root'
})
export class ControlValidateService {

  constructor() { }

  private errorMessage: IErrMsg = {
    login : {
      required : 'You must enter a email/phone',
      login : 'Not a valid email'
    },
    password : {
      required : 'You must enter a password',
      minlength : 'Password must be at least 4 characters'
    },
    name : {
      required : 'You must enter a name',
    }
  };

  private phoneAndEmailValidator =  (control: AbstractControl): {[key: string]: any} | null => {

    const PHONE_REGEXP : RegExp = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){7,14}(\s*)?$/;
    const EMAIL_REGEXP : RegExp=
    /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/;

    return EMAIL_REGEXP.test(control.value) || PHONE_REGEXP.test(control.value) ? null : {'login': true};
  };

  getErrorMessage(key : string, field: AbstractControl ) : string{

    let message : string = '';

    Object.entries(this.errorMessage[key]).some(error => { 
      if(field.hasError(error[0])){
        message = error[1];
        return true;
      }
      return false;
    })
    return message;
  }

  getValidator(){
    return this.phoneAndEmailValidator;
  }
}
