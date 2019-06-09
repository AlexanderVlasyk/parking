import { Component, OnInit } from '@angular/core';
import { MapService } from '../shared/map.service';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

@Component({
  selector: 'app-map',
  styles: [`
    agm-map {
      height: 600px;
    }
  `],
  templateUrl: './map.component.html'
})
@NgModule({
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA3jd636bBrRo6a8IZ5LnHtKpjE1aFnmQM'
    })
  ],
  declarations: [ MapComponent ],
  bootstrap: [ MapComponent ]
})

export class MapComponent implements OnInit {
  lat: string = '';
  lng: string = '';

  markers;

  location: Object;

  constructor(private mapService: MapService) { }

  ngOnInit() {
    // this.map.getLocation().subscribe(garage => {
    //   console.log(garage);
    //   this.lat = garage.geometry.coordinates[0];
    //   this.lng = garage.geometry.coordinates[1];
    // })

    this.mapService.getLocation().subscribe((des)=>{
      console.log(des);
      this.markers = des.features;
    });
  }

}
