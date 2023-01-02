import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YourMarioComponent } from './components/your-mario/your-mario.component';
import { OtherMarioComponent } from './components/other-mario/other-mario.component';



@NgModule({
  declarations: [
    YourMarioComponent,
    OtherMarioComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MarioModule { }
