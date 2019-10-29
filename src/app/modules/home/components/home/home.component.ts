import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { cvData } from 'src/app/shared/models/cvdata.model';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  get firstName() { return this.cvForm.get('firstName'); }
  get lastName() { return this.cvForm.get('lastName'); }
  get age() { return this.cvForm.get('age'); }
  get phone() { return this.cvForm.get('phone'); }
  get email() { return this.cvForm.get('email'); }
  get address() { return this.cvForm.get('address'); }
  get message() { return this.cvForm.get('message'); }

  constructor(private afs: AngularFirestore) {

    this.cvRef = this.afs.collection<cvData>('cvForm');
    this.cvdata = {
      firstName: this.firstName.value,
      lastName: this.lastName.value,
      age: this.age.value,
      phone: this.phone.value,
      email: this.email.value,
      address: this.address.value,
      message: this.message.value,
    };
}

  cvForm: FormGroup;
  isLoading: boolean;
  data: cvData[];




  cvdata: cvData;
  successMsg = 'Data successfully saved.';

  cvRef: AngularFirestoreCollection<cvData>;
  cvData: Observable<cvData[]>;

  ngOnInit() {
    this.cvForm = new FormGroup(
      {
        firstName: new FormControl('', {
          validators: [Validators.required]
        }),
        lastName: new FormControl('', {
          validators: [Validators.required]
        }),
        age: new FormControl('', {
          validators: [Validators.required]
        }),
        phone: new FormControl('', {
          validators: [Validators.required]
        }),
        email: new FormControl('', {
          validators: [Validators.required]
        }),
        address: new FormControl('', {
          validators: [Validators.required]
        }),
        message: new FormControl('', {
          validators: [Validators.required]
        }),
      });
  }


  onSubmit() {
    if (this.cvForm.valid) {
      this.cvRef.add(this.cvdata).then( _ => alert(this.successMsg));
    }
  }
}


