import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { AuthRoutingModule } from './auth-routing.module';
import { ControlsComponent } from './controls/controls.component';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginFormComponent } from './login-form/login-form.component';

@NgModule({
  declarations: [
    SignUpFormComponent,
    ControlsComponent,
    WelcomeComponent,
    LoginFormComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSlideToggleModule,
  ],
})
export class AuthModule {}
