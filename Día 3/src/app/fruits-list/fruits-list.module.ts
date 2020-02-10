import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { FruitsListPage } from './fruits-list.page';
import { FruitCardComponent } from '../Components/fruit-card/fruit-card.component'; 

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: FruitsListPage
      }
    ])
  ],
  declarations: [FruitsListPage,FruitCardComponent]
})
export class FruitsListPageModule {}
