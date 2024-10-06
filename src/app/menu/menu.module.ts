import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MEnuPageRoutingModule } from './menu-routing.module';

import { MEnuPage } from './menu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MEnuPageRoutingModule
  ],
  declarations: [MEnuPage]
})
export class MEnuPageModule {}
