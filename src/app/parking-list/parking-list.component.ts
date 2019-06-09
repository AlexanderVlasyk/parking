import { Component, OnInit } from '@angular/core';
import { GaragesService } from '../shared/garages.service';

@Component({
  selector: 'app-parking-list',
  templateUrl: './parking-list.component.html',
  styleUrls: ['./parking-list.component.scss']
})
export class ParkingListComponent implements OnInit {
  appTitle = 'parking';
  private loading: boolean= true;

  parking;

  constructor(private garagesService: GaragesService) { }
  ngOnInit() {
    this.garagesService.fetchGarages().subscribe((res)=>{
      console.log(res);
      this.parking = res.features;
    });
  }

}
