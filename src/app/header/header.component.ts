import { Component, OnDestroy, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { HandyModel } from '../models/handy.model';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  private readonly destroy$ = new Subject();
  handyList: HandyModel[] = [];

  constructor(private appService: AppService) {
  }

  ngOnInit(): void {
    this.appService.getPhoneList().pipe(
      takeUntil(this.destroy$)
    ).subscribe((handyList: HandyModel[]) => {
      this.handyList = handyList;
    })
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
