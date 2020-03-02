import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as Material from '@angular/material';
import * as MaterialDate from '@angular/material/datepicker';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Material.MatToolbarModule,
    Material.MatGridListModule,
    Material.MatRadioModule,
    Material.MatFormFieldModule,
    Material.MatInputModule,
    MaterialDate.MatDatepickerModule,
    Material.MatNativeDateModule,
    Material.MatSelectModule,
    Material.MatButtonModule

  ],
  exports: [
    Material.MatToolbarModule,
    Material.MatGridListModule,
    Material.MatRadioModule,
    Material.MatFormFieldModule,
    Material.MatInputModule,
    MaterialDate.MatDatepickerModule,
    Material.MatNativeDateModule,
    Material.MatSelectModule,
    Material.MatButtonModule
  ]
})
export class MaterialModule { }
