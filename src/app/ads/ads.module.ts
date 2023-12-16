import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdsPageRoutingModule } from './ads-routing.module';

import { AdsPage } from './ads.page';
import { AdsListComponent } from './ads-list/ads-list.component';
import { CreateAdComponent } from './create-ad/create-ad.component';
import { AdDetailsComponent } from './ad-details/ad-details.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AdsPageRoutingModule
  ],
  declarations: [AdsPage,AdsListComponent,CreateAdComponent,AdDetailsComponent]
})
export class AdsPageModule {}
