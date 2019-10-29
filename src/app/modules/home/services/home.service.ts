import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private firestore: AngularFirestore) {}


  createCv(data) {
    return new Promise<any>((resolve, reject) => {
        this.firestore
            .collection('cvForm')
            .add(data)
            .then(
              (res: any) => {
              resolve(res);
            }, err => reject(err));
    });
}
}
