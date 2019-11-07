import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { filter, map } from 'rxjs/operators';
import { JhiEventManager } from 'ng-jhipster';

import { IWishList } from 'app/shared/model/wish-list.model';
import { AccountService } from 'app/core/auth/account.service';
import { WishListService } from './wish-list.service';

@Component({
  selector: 'jhi-wish-list',
  templateUrl: './wish-list.component.html'
})
export class WishListComponent implements OnInit, OnDestroy {
  wishLists: IWishList[];
  currentAccount: any;
  eventSubscriber: Subscription;

  constructor(
    protected wishListService: WishListService,
    protected eventManager: JhiEventManager,
    protected accountService: AccountService
  ) {}

  loadAll() {
    this.wishListService
      .query()
      .pipe(
        filter((res: HttpResponse<IWishList[]>) => res.ok),
        map((res: HttpResponse<IWishList[]>) => res.body)
      )
      .subscribe((res: IWishList[]) => {
        this.wishLists = res;
      });
  }

  ngOnInit() {
    this.loadAll();
    this.accountService.identity().subscribe(account => {
      this.currentAccount = account;
    });
    this.registerChangeInWishLists();
  }

  ngOnDestroy() {
    this.eventManager.destroy(this.eventSubscriber);
  }

  trackId(index: number, item: IWishList) {
    return item.id;
  }

  registerChangeInWishLists() {
    this.eventSubscriber = this.eventManager.subscribe('wishListListModification', response => this.loadAll());
  }
}
