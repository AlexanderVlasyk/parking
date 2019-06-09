import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

interface Location {
  latitude: string;
  langitude: string;
}

@Injectable({providedIn: 'root'})
export class MapService {
  constructor(private http: HttpClient) {}
  readonly ROOT_URL = 'http://api.citysdk.waag.org/layers/parking.garage/objects?per_page=25';

  getLocation() {
    return this.http.get<any>(this.ROOT_URL);
  }
}
