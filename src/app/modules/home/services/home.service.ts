import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  constructor(private firestore: AngularFirestore) {}
  form = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      age: new FormControl(''),
      phone: new FormControl(''),
      address: new FormControl(''),
  });
  createCvOrder(data) {
    return new Promise<any>((resolve, reject) => {
        this.firestore
            .collection('cvForm')
            .add(data)
            .then(res => {}, err => reject(err));
    });
}
}
