import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: LoginComponent,
  //   children: [
  //     {
  //       path: 'login',
  //       component: LoginagaaainComponent,
  //       pathMatch: 'full',
  //     },
  //     {
  //       path: 'register',
  //       component: RegisterComponent,
  //       pathMatch: 'full',
  //     },
  //   ],
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
