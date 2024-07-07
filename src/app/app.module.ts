import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material.module';
import { SignUpComponent } from './pages/auth/sign-up/sign-up.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/navigation/header/header.component';
import { SidebarNavListComponent } from './components/navigation/sidebar-nav-list/sidebar-nav-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    WelcomeComponent,
    HeaderComponent,
    SidebarNavListComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FlexLayoutModule,
    FormsModule,
    MaterialModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
