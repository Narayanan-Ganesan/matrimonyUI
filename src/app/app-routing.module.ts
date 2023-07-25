import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { UserInformationComponent } from './user-information/user-information.component';
import { SearchComponent } from './search/search.component';
import { DisplayComponent } from './display/display.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
  
    {
      path: '',
      redirectTo: 'landing',
      pathMatch: 'full'
    },
    {
      path: 'main',
      component:MainComponent
    }
    ,
    {
      path: 'register',
      component:UserInformationComponent
    }
    ,
    {
      path:'search',
      component:SearchComponent
    },
    {
      path:'display',
      component:DisplayComponent
    },
    {
      path:'landing',
      component:LandingPageComponent
    }
    
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
