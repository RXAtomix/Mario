import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { inscriptionService } from 'src/app/core/services/inscription.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent {
  constructor(private inscription: inscriptionService, private router: Router) { }

  ngOnInit (){}

  onSubmitInscr (){

  }
}
