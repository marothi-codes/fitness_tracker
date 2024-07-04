import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WelcomeComponent } from './pages/welcome/welcome.component';
import { SignUpComponent } from './pages/auth/sign-up/sign-up.component';
import { LoginComponent } from './pages/auth/login/login.component';

const routes: Routes = [
  { path: 'sign-up', component: SignUpComponent },
  { path: 'login', component: LoginComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'training', loadChildren: () => import('./pages/training/training.module').then(m => m.TrainingModule) },
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
