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
    this.banners.push({title:'image1',url:'/image1.jpg'});
    this.banners.push({title:'image2',url:'/image2.jpeg'});
    this.banners.push({title:'image1',url:'/image3.jpeg'});
   }

  ngOnInit(): void {
  }

}
