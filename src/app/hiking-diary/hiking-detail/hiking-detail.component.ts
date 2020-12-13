import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Hike } from '../hiking.model';
import { HikingService} from '../hiking.service';
import { WindRefService } from 'src/app/wind-ref.service';
@Component({
  selector: 'app-hiking-detail',
  templateUrl: './hiking-detail.component.html',
  styleUrls: ['./hiking-detail.component.css']
})
export class HikingDetailComponent implements OnInit {
  hike: Hike;
  id: string;
  nativeWindow: any;

  constructor(
    private hikeService: HikingService,
     private router: Router,
     private route: ActivatedRoute,
     private windRefService: WindRefService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = params.id;
        this.hike = this.hikeService.getHike(this.id);
        console.log(this.hike);
      }
    );

    this.nativeWindow = this.windRefService.getNativeWindow();
  }

  onDelete() {
    this.hikeService.deleteHike(this.hike);
    this.router.navigateByUrl('/hikes');
 }

 onView() {
   if (this.hike.description) {
     console.log(this.hike.description);
   }
   if (this.hike.imageUrl) {
     this.nativeWindow.open(this.hike.imageUrl);
   }
 }

}
