import { Component, Input, OnInit } from '@angular/core';
import { Hike } from '../hiking.model';

@Component({
  selector: 'app-hiking-item',
  templateUrl: './hiking-item.component.html',
  styleUrls: ['./hiking-item.component.css']
})
export class HikingItemComponent implements OnInit {
  @Input() hike: Hike;

  constructor() { }

  ngOnInit(): void {
  }

}
