import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Devoxx2019SharedModule } from 'app/shared/shared.module';
import { WishListComponent } from './wish-list.component';
import { WishListDetailComponent } from './wish-list-detail.component';
import { WishListUpdateComponent } from './wish-list-update.component';
import { WishListDeletePopupComponent, WishListDeleteDialogComponent } from './wish-list-delete-dialog.component';
import { wishListRoute, wishListPopupRoute } from './wish-list.route';

const ENTITY_STATES = [...wishListRoute, ...wishListPopupRoute];

@NgModule({
  imports: [Devoxx2019SharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [
    WishListComponent,
    WishListDetailComponent,
    WishListUpdateComponent,
    WishListDeleteDialogComponent,
    WishListDeletePopupComponent
  ],
  entryComponents: [WishListDeleteDialogComponent]
})
export class Devoxx2019WishListModule {}
