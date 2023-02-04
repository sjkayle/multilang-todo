import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutes } from './enums/routes.enum';
import { TodoComponent } from './modules/user/todo/todo.component';

const routes: Routes = [
  { path: AppRoutes.HomePage, component: TodoComponent },
  {
    path: AppRoutes.Index,
    redirectTo: '/' + AppRoutes.HomePage,
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
