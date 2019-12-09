import { Component, OnInit, HostListener } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Project } from 'src/app/shared/models/project';
import { FormGroup, NgForm } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  emailForm: NgForm;
  private projectCollection: AngularFirestoreCollection<Project>;
  private emailCollection: AngularFirestoreCollection<any>;
  userProjects: Observable<Project[]>;
  showScroll: boolean;
  showScrollHeight = 300;
  hideScrollHeight = 10;
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
  constructor(private router: Router,
              private afs: AngularFirestore,
    ) {
      this.projectCollection = this.afs.collection<Project>('userProjects');
      this.emailCollection = this.afs.collection<any>('emailNewsletter');
      this.userProjects = this.projectCollection.valueChanges();
      this.project = JSON.parse(sessionStorage.getItem('project')) || new Project();
}

ngOnInit() {}


@HostListener('window:scroll', [])
    onWindowScroll() {
      if (( window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) > this.showScrollHeight) {
        this.showScroll = true;
      } else if (
        this.showScroll && (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) < this.hideScrollHeight) {
        this.showScroll = false;
      }
    }



scrollToTop() {
   (function smoothscroll() {
     const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
     if (currentScroll > 0) {
          window.requestAnimationFrame(smoothscroll);
          window.scrollTo(0, currentScroll - (currentScroll / 5));
        }
      })();
  }


submitForm() {
    const param = JSON.parse(JSON.stringify(this.project));
    this.projectCollection
    .add(param)
    .then( resp => {
    this.router.navigate(['/submission']);
    this.project = new Project();
    });
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
