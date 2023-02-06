import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { UserActions } from 'src/app/enums/general.enum';
import { AppRoutes } from 'src/app/enums/routes.enum';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { LoggingService } from 'src/app/services/logging/logging.service';

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

  constructor(
    private authenticationService: AuthenticationService,
    private loggingService: LoggingService,
    private router: Router
  ) {}

  onSubmit() {
    this.authenticationService.login();
    this.loggingService.log(new Date(), UserActions.Login, 'logged in');
    this.router.navigate([AppRoutes.HomePage]);
  }
}
