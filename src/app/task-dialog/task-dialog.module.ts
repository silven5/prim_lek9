import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TaskDialogPageRoutingModule } from './task-dialog-routing.module';

import { TaskDialogPage } from './task-dialog.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TaskDialogPageRoutingModule
  ],
  declarations: [TaskDialogPage]
})
export class TaskDialogPageModule {}
