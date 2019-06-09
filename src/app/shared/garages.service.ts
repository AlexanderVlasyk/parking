import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
// import {tap} from 'rxjs/operators';
import {Observable} from 'rxjs';
// export interface Garage {
//   title: string
//   data: any
//   state: boolean
//   freeSpaceShort: number
//   freeSpaceLong: number
//   shortCapacity: number
//   longCapacity: number
// }

@Injectable({providedIn: 'root'})
export class GaragesService {
    readonly ROOT_URL = 'http://api.citysdk.waag.org/layers/parking.garage/objects?per_page=25';

  // public garages: Garage[] = []
  constructor(private http: HttpClient) {}
  fetchGarages(): Observable<any> {
    return this.http.get(this.ROOT_URL )
    // .pipe(tap( garages => this.garages = garages));
  }
}
