import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/components/login/login.component';
import { InscriptionComponent } from './inscription/components/inscription.component';
import { LandingPageComponent } from './landing-page/components/landing-page.component';

const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'inscription', component: InscriptionComponent},
  { path: '', component: LandingPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
