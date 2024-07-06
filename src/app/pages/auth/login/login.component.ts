import { Component } from '@angular/core';
import { NgForm, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log(form.value);
    } else {
      Object.keys(form.controls).forEach(key => {
        const controlErrors: ValidationErrors = form.controls[key].errors;
        if (controlErrors != null) {
          Object.keys(controlErrors).forEach(keyError => {
            console.log('Key control: ' + key + ', keyError: ' + keyError + ', err value: ', controlErrors[keyError]);
          });
        }
      });
    }
  }
}
