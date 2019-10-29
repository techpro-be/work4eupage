import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { cvData } from 'src/app/shared/models/cvdata.model';
@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private firestore: AngularFirestore) {}


  createCv(data: cvData) {
   return this.firestore.collection('cvForm').add(data);
  }
}
