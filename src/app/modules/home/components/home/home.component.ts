import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  cvOrder = [];

  constructor(public homeService: HomeService ) { }


  ngOnInit() {
  }

  onSubmit() {
    this.homeService.form.value.cvOrder = this.cvOrder;
    const data = this.homeService.form.value;

    this.homeService.createCvOrder(data)
       .then(res => {
           /*do something here....
           maybe clear the form or give a success message*/
       });
}
}
