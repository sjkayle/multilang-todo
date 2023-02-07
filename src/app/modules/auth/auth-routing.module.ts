import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutes, AuthRoutes } from 'src/app/enums/routes.enum';
import { LoginFormComponent } from './login-form/login-form.component';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {
    path: AppRoutes.AuthPage,
    // component:
    children: [
      // {
      //   path: 
      //   children: []
      // }
      {
        path: AuthRoutes.LoginPage,
        component: LoginFormComponent,
      },
      {
        path: AuthRoutes.SignUpPage,
        component: SignUpFormComponent,
      },
      { path: '', component: WelcomeComponent, pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
