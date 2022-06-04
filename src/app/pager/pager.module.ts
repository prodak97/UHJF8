import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonLeftComponent } from '../button-left/button-left.component';
import { ButtonRightComponent } from '../button-right/button-right.component';
import { ButtonRecordComponent } from '../button-record/button-record.component';
import { GreenButtonComponent } from '../green-button/green-button.component';



@NgModule({
  declarations: [
    ButtonLeftComponent,
    ButtonRightComponent,
    ButtonRecordComponent,
    GreenButtonComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagerModule { }
