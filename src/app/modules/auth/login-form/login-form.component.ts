import { Component } from '@angular/core';

type LoginFormInputs = {
  username: string;
  password: string;
};

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  model: LoginFormInputs = {
    username: '',
    password: '',
  };

  onSubmit() {
    console.log(this.model);
  }
}
