import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Project } from 'src/app/shared/models/project';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent {
  private projectCollection: AngularFirestoreCollection<Project>;
  userProjects: Observable<Project[]>;

  constructor(private router: Router,
              private afs: AngularFirestore,
              ) {
                this.projectCollection = this.afs.collection<Project>('userProjects');
                this.userProjects = this.projectCollection.valueChanges();
                this.project = JSON.parse(sessionStorage.getItem('project')) || new Project();
}

project = new Project();

devCategories = [
  'Web Development',
  'Application Design & Development',
  'Database Development',
  'Systems and Infrastructure',
  'Security'
];

  submitForm() {
    const param = JSON.parse(JSON.stringify(this.project));
    this.projectCollection
      .add(param)
      .then( resp => {
      this.router.navigate(['/submission']);
      this.project = new Project();
    });
  }

}
