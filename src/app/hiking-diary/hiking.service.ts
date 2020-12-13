import { Injectable } from '@angular/core';
import {Hike} from './hiking.model';
import {Subject} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HikingService {
  hikes: Hike[] = [];
  HikeListChangedEvent = new Subject<Hike[]>();
  maxHikeId: number;

  constructor(private http: HttpClient) { 
    this.maxHikeId = this.getMaxId();
    
  }

  getHikes() {
    this.http.get('http://localhost:3000/hikes')
    .subscribe(
      (hikes: Hike[]) => {
        this.hikes = hikes;

        this.maxHikeId = this.getMaxId();

        this.hikes.sort((a,b) => a.name > b.name ? 1 : b.name > a.name ? -1 : 0);
        this.HikeListChangedEvent.next(this.hikes.slice());
      },
      //error function
      (error: any) => {
        console.log(error);
      }
    )

}

  getHike(id: string): Hike {
    for (const hike of this.hikes) {
        if (hike.id === id) {
            return hike;
        }
    }
    return null;
}


getMaxId(): number {

  var maxId = 0;

  for (const hike of this.hikes) {
       var currentId = parseFloat(hike.id);
      if (currentId > maxId) {
          maxId = currentId;
      }
}
  return maxId;
}

addHike(hike: Hike) {
  if (!hike) {
    return;
  }

  // make sure id of the new Hike is empty
  hike.id = '';

  const headers = new HttpHeaders({'Content-Type': 'application/json'});

  // add to database
  this.http.post<{ message: string, hike: Hike }>('http://localhost:3000/hikes',
    hike,
    { headers: headers })
    .subscribe(
      (responseData) => {
        // add new hike to hikes
        this.hikes.push(responseData.hike);
        this.hikes.sort((a,b) => a.name > b.name ? 1 : b.name > a.name ? -1 : 0);
            this.HikeListChangedEvent.next(this.hikes.slice());
      }
    );
}

updateHike(originalHike: Hike, newHike: Hike) {
  if (!originalHike || !newHike) {
    return;
  }

  const pos = this.hikes.findIndex(d => d.id === originalHike.id);

  if (pos < 0) {
    return;
  }

  // set the id of the new hike to the id of the old hike
  newHike.id = originalHike.id;

  const headers = new HttpHeaders({'Content-Type': 'application/json'});

  // update database
  this.http.put('http://localhost:3000/hikes/' + originalHike.id,
    newHike, { headers: headers })
    .subscribe(
      (response: Response) => {
        this.hikes[pos] = newHike;
        this.hikes.sort((a,b) => a.name > b.name ? 1 : b.name > a.name ? -1 : 0);
            this.HikeListChangedEvent.next(this.hikes.slice());
      }
    );
}

deleteHike(hike: Hike) {

  if (!hike) {
    return;
  }

  const pos = this.hikes.findIndex(d => d.id === hike.id);

  if (pos < 0) {
    return;
  }
}

storeHikes() {
  let hikes = JSON.stringify(this.hikes);

  const headers = new HttpHeaders({'Content-Type': 'application/json'});

  this.http.put('http://localhost:3000/hikes/', hikes, {headers: headers})
    .subscribe(
      () => {
        this.HikeListChangedEvent.next(this.hikes.slice());
      }
    );
}

}
