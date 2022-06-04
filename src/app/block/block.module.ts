import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoolerComponent } from '../cooler/cooler.component';
import { UsbPortComponent } from '../usb-port/usb-port.component';
import { DvdplayerComponent } from '../dvdplayer/dvdplayer.component';
import { MotherboardComponent } from '../motherboard/motherboard.component';
import { HardDiskComponent } from '../hard-disk/hard-disk.component';



@NgModule({
  declarations: [
    CoolerComponent,
    UsbPortComponent,
    DvdplayerComponent,
    MotherboardComponent,
    HardDiskComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BlockModule { }
