import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {tap} from 'rxjs/operators';
import {Observable} from 'rxjs';
export interface Garage {
  title: string
  data: any
  state: boolean
  freeSpaceShort: number
  freeSpaceLong: number
  shortCapacity: number
  longCapacity: number
}

@Injectable({providedIn: 'root'})
export class GaragesService {
    appTitle = 'parking';
    readonly ROOT_URL = 'http://api.citysdk.waag.org/layers/parking.garage/objects?per_page=25';

  public garages: Garage[] = [
    // {
    //   name: 'ACTA', data:'12.12.12', state:false, freeSpaceShort: 1, freeSpaceLong: 2, shortCapacity: 3, longCapacity:4
    // },
    // {
    //   name: 'ACTA2', data:'12.12.2', state:true, freeSpaceShort: 1, freeSpaceLong: 2, shortCapacity: 3, longCapacity:4
    // }
  ]
  constructor(private http: HttpClient) {}
  fetchGarages(): Observable<Garage[]> {
    return this.http.get<Garage[]>(this.ROOT_URL )
    .pipe(tap( garages => this.garages = garages));
  }
}
