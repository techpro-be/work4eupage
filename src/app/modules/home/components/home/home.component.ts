import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { HomeService } from '../../services/home.service';
import { MatSnackBar } from '@angular/material';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // get firstName() { return this.cvForm.get('firstName'); }
  // get lastName() { return this.cvForm.get('lastName'); }
  // get age() { return this.cvForm.get('age'); }
  // get phone() { return this.cvForm.get('phone'); }
  // get email() { return this.cvForm.get('email'); }
  // get address() { return this.cvForm.get('address'); }
  // get message() { return this.cvForm.get('message'); }

  constructor(
    private homeService: HomeService,
    private snackBar: MatSnackBar
    ) {}

  cvForm: FormGroup;
  isLoading: boolean;

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
          validators: [Validators.required, Validators.minLength(18)]
        }),
        phone: new FormControl('', {
          validators: [Validators.required]
        }),
        email: new FormControl('', {
          validators: [Validators.required, Validators.email]
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
      this.isLoading = true;
      const data = this.cvForm.value;
      this.homeService.createCv(data)
      .then(
        resp => {
          this.snackBar.open('Your CV has been submitted successfully ', null, {
            duration: 3000
          });
          this.isLoading = false;
          this.cvForm.reset();
          console.log('data', data);

        })
      .catch(error => {
        this.isLoading = false;
        this.snackBar.open(error.message, null, {
          duration: 3000
        });
      });
  } else {
    this.snackBar.open('Please fill all the required fields', null, {
      duration: 3000
    });
  }
  }
}


