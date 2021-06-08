import { AnimalListComponent } from './../animal/animal-list/animal-list.component';


import { AnimalDetailComponent } from './../animal/animal-detail/animal-detail.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab21PageRoutingModule } from './tab21-routing.module';

import { Tab21Page } from './tab21.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab21PageRoutingModule
  ],
  declarations: [Tab21Page,AnimalDetailComponent,AnimalListComponent]
})
export class Tab21PageModule {}
