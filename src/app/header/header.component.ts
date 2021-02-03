import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  menus:Menu[]=[];

  constructor() {
   }

  ngOnInit(): void {
     let menu1:Menu=new Menu();
     menu1.name="Eye Testing";
     let menu2:Menu=new Menu();
     menu2.name="Eye Wear";
     let menu3:Menu=new Menu();
     menu3.name="Sun Glass";
     let menu4:Menu=new Menu();
     menu4.name="Computer Glass";
     let menu5:Menu=new Menu();
     menu5.name="Contact Lens";
     this.menus.push(menu1);
     this.menus.push(menu2);
     this.menus.push(menu3);
     this.menus.push(menu4);
     this.menus.push(menu5);

  }

}

export class Menu{
   name:string='';
   menus:Menu[]=[];
   construtor(name:string,menus:Menu[]){
     this.name=name;
     this.menus=menus;
   }

}
