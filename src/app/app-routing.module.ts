import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { SignUpComponent } from './pages/auth/sign-up/sign-up.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { TrainingRoutingModule } from './pages/training/training-routing.module';

const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'login', component: LoginComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'training', loadChildren: () => import('./pages/training/training.module').then(m => m.TrainingModule) },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    TrainingRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
