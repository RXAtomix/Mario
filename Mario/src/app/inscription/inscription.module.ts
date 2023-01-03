import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InscriptionComponent } from './components/inscription.component';



@NgModule({
  declarations: [
    InscriptionComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    InscriptionComponent
  ]
})
export class InscriptionModule { }
