import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../services/firestore.service';
import { Menu, Banner } from '../models/models';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.less']
})
export class CarouselComponent implements OnInit {

  banners:Banner[]=[];
  constructor(service:FirestoreService) {
    service.bannerRef.valueChanges().subscribe(res=>{this.banners=res;});
   }

  ngOnInit(): void {
  }

}
