import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminComponent } from '../administrateur/admin/admin.component';



@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class AdminModule { }
