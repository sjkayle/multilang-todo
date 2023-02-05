import { Component } from '@angular/core';

export type SignUpFormInputs = {
  username: string;
  password: string;
  confirmPassword: string;
  isAdmin?: boolean;
};

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss'],
})
export class SignUpFormComponent {
  model: SignUpFormInputs = {
    username: '',
    password: '',
    confirmPassword: '',
    isAdmin: false,
  };

  onSubmit() {
    console.log(this.model);
  }
}
