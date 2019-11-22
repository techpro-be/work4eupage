import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Resume, Education, Experience, Language, itKnowledge } from '../../resume';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() {}

  ngOnInit() {}

}
