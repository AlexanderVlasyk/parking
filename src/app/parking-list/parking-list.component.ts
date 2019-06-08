import { Component, OnInit } from '@angular/core';
import { GaragesService } from '../shared/garages.service';

@Component({
  selector: 'app-parking-list',
  templateUrl: './parking-list.component.html',
  styleUrls: ['./parking-list.component.scss']
})
export class ParkingListComponent implements OnInit {

  private loading: boolean= true;

  constructor(private garagesService: GaragesService) { }
  ngOnInit() {
    this.garagesService.fetchGarages().subscribe(()=>{
      this.loading= false;
    })
  }

}
