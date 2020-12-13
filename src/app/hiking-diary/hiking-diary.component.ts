import { Component, OnInit } from '@angular/core';
import { HikingService } from './hiking.service';

@Component({
  selector: 'app-hiking-diary',
  templateUrl: './hiking-diary.component.html',
  styleUrls: ['./hiking-diary.component.css']
})
export class HikingDiaryComponent implements OnInit {

  //selectedDocument: Document;

  constructor(private HikingService: HikingService) { }

  ngOnInit() {
    // this.DocumentService.documentSelectedEvent.subscribe(
    //   (documents: Document) => {
    //     this.selectedDocument = document;
    //   });
  }
}