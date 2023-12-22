import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GestionMatieresComponent } from '../administrateur/gestion-matieres/gestion-matieres.component';



@NgModule({
  declarations: [GestionMatieresComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class MatieresModule { }
