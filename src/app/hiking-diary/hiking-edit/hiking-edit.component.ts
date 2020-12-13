import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Hike } from '../hiking.model';
import { HikingService } from '../hiking.service';

@Component({
  selector: 'app-hiking-edit',
  templateUrl: './hiking-edit.component.html',
  styleUrls: ['./hiking-edit.component.css']
})
export class HikingEditComponent implements OnInit {

originalHike: Hike;
hike: Hike;
editMode:boolean = false;

  constructor( private hikingService:
                HikingService,
                  private router: Router,
                  private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe (
      (params: Params) => {
        var id = params.id;
        if (!id) {
          this.editMode = false;
          return
        }
        this.originalHike = this.hikingService.getHike(id);

        if (!this.originalHike) {
          return
       }
        this.editMode = true
       this.hike = JSON.parse(JSON.stringify(this.originalHike));
      }
    )
  }

  onSubmit(form: NgForm) {
    var value = form.value; // get values from form’s fields
    const newHike = new Hike(value.id, value.name, value.description, value.imageUrl, value.children);
    

    if (this.editMode) {
     this.hikingService.updateHike(this.originalHike, newHike);
    }
    else {
     this.hikingService.addHike(newHike);
    }
    this.router.navigateByUrl('/hikes');
 }

 onCancel() {
  this.router.navigateByUrl('/hikes');
  }

}
