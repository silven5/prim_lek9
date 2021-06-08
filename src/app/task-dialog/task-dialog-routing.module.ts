import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TaskDialogPage } from './task-dialog.page';

const routes: Routes = [
  {
    path: '',
    component: TaskDialogPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TaskDialogPageRoutingModule {}
