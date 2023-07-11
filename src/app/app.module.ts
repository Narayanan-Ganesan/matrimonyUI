import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserInformationComponent } from './user-information/user-information.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { Routes } from '@angular/router';

import { ReactiveFormsModule } from '@angular/forms';

const appRoutes: Routes = [
  
  {
     path: 'mainpage',
     component: MainComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    UserInformationComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
