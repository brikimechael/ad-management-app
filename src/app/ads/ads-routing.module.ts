import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateAdComponent } from './create-ad/create-ad.component';
import { AdsListComponent } from './ads-list/ads-list.component';
import { AdDetailsComponent } from './ad-details/ad-details.component';
import { AdsPage } from './ads.page';

const routes: Routes = [

  {
    path: 'create-ad',
    component : CreateAdComponent
  },
  {
    path: 'ads-list',
    component : AdsListComponent
  },
  {
    path: 'ads-list/:id',
    component : AdDetailsComponent
  },
  {
    path: '',
    component : AdsPage
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdsPageRoutingModule {}
