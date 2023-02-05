import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutes, AuthRoutes } from './enums/routes.enum';
import { LoginFormComponent } from './modules/auth/login-form/login-form.component';
import { SignUpFormComponent } from './modules/auth/sign-up-form/sign-up-form.component';
import { WelcomeComponent } from './modules/auth/welcome/welcome.component';
import { TodoComponent } from './modules/user/todo/todo.component';

const routes: Routes = [
  // TODO: add guards on protected routes
  { path: AppRoutes.HomePage, component: TodoComponent },
  {
    path: AppRoutes.AuthPage,
    children: [
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
  {
    path: AppRoutes.Index,
    redirectTo: '/' + AppRoutes.AuthPage,
    pathMatch: 'full',
  },
  // TODO: create a 404 page component
  // {
  //   path: '**',
  //   component: PageNotFoundComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
