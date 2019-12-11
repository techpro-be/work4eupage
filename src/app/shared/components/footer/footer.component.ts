import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  private emailCollection: AngularFirestoreCollection<any>;
  constructor(private afs: AngularFirestore) {
    this.emailCollection = this.afs.collection<any>('emailNewsletter');
  }

  ngOnInit() {
  }


  onEmailSubmit(emailForm: NgForm) {
    this.emailCollection
      .add(emailForm.value)
      .then( resp => {
      emailForm.reset();
      });
    console.log(emailForm.value);
  }
}
