import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Hike } from '../hiking.model';
import { HikingService } from '../hiking.service';

@Component({
  selector: 'app-hiking-list',
  templateUrl: './hiking-list.component.html',
  styleUrls: ['./hiking-list.component.css']
})
export class HikingListComponent implements OnInit {

subscription: Subscription;
hikes: Hike[] = [];

  constructor(private hikingService: HikingService) { }

  ngOnInit() {
    this.subscription = this.hikingService.HikeListChangedEvent
      .subscribe(
        (hikeList: Hike[]) => {
          this.hikes = hikeList;
        }
      );
      this.hikingService.getHikes();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
