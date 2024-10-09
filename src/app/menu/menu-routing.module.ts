import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MEnuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MEnuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MEnuPageRoutingModule {}
