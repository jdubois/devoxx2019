import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Devoxx2019SharedModule } from 'app/shared/shared.module';
import { ProductComponent } from './product.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductUpdateComponent } from './product-update.component';
import { ProductDeletePopupComponent, ProductDeleteDialogComponent } from './product-delete-dialog.component';
import { productRoute, productPopupRoute } from './product.route';

const ENTITY_STATES = [...productRoute, ...productPopupRoute];

@NgModule({
  imports: [Devoxx2019SharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [
    ProductComponent,
    ProductDetailComponent,
    ProductUpdateComponent,
    ProductDeleteDialogComponent,
    ProductDeletePopupComponent
  ],
  entryComponents: [ProductDeleteDialogComponent]
})
export class Devoxx2019ProductModule {}
