import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PixelsComponent } from '../pixels/pixels.component';
import { CaptureComponent } from '../capture/capture.component';
import { WhiteRabitDirective } from '../white-rabit.directive';


@NgModule({
  declarations: [
    PixelsComponent,
    CaptureComponent,
    WhiteRabitDirective
  ],
  imports: [
    CommonModule
  ]
})
export class DisplayModule { }
