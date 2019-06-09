import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ParkingListComponent } from './parking-list/parking-list.component';
import { MapComponent } from './map/map.component';
import { GaragesService } from './shared/garages.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    ParkingListComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AgmCoreModule.forRoot()
  ],
  providers: [GaragesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
