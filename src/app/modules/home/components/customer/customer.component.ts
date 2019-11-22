import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { MatSnackBar } from '@angular/material';
import { Project } from '../../project';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  constructor(private router: Router,
              private afs: AngularFirestore,
              ) {
                this.projectCollection = this.afs.collection<Project>('userProjects');
                this.userProjects = this.projectCollection.valueChanges();
                this.project = JSON.parse(sessionStorage.getItem('project')) || new Project();
}

private projectCollection: AngularFirestoreCollection<Project>;
userProjects: Observable<Project[]>;

project = new Project();

devCategories = [
  'Web Development',
  'Application Design & Development',
  'Database Development',
  'Systems and Infrastructure',
  'Security'
];

contractTypes = [
  'Outsourcing',
  'I dont know, advise me!'
];

ngOnInit() {}


  submitForm() {
    const param = JSON.parse(JSON.stringify(this.project));
    this.projectCollection
      .add(param)
      .then( resp => {
      this.router.navigate(['/submission']);
      this.project = new Project();
    });
  }

  // resetForm() {
  //   this.project = new Project();
  // }

}
