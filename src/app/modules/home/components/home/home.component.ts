import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Project } from '../../project';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
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

}
