import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../services/firestore.service';
import { Menu } from '../models/models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  menus:Menu[]=[];

  constructor(service:FirestoreService) {
    service.menuRef.valueChanges().subscribe(res=>{
      this.menus=res;
    });
   }

  ngOnInit(): void {

  }

}

