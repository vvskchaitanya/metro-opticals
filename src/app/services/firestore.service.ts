import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Menu,Banner } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  menuRef:AngularFirestoreCollection<Menu>;
  bannerRef:AngularFirestoreCollection<Banner>;
  constructor(firestore:AngularFirestore) {
    this.menuRef = firestore.collection<Menu>('menus', ref => ref.orderBy('order'));
    this.bannerRef= firestore.collection<Banner>('banners', ref => ref.orderBy('order'));
  }
}
