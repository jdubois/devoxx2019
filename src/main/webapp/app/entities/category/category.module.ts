import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Devoxx2019SharedModule } from 'app/shared/shared.module';
import { CategoryComponent } from './category.component';
import { CategoryDetailComponent } from './category-detail.component';
import { CategoryUpdateComponent } from './category-update.component';
import { CategoryDeletePopupComponent, CategoryDeleteDialogComponent } from './category-delete-dialog.component';
import { categoryRoute, categoryPopupRoute } from './category.route';

const ENTITY_STATES = [...categoryRoute, ...categoryPopupRoute];

@NgModule({
  imports: [Devoxx2019SharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [
    CategoryComponent,
    CategoryDetailComponent,
    CategoryUpdateComponent,
    CategoryDeleteDialogComponent,
    CategoryDeletePopupComponent
  ],
  entryComponents: [CategoryDeleteDialogComponent]
})
export class Devoxx2019CategoryModule {}
