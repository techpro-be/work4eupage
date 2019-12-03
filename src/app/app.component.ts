import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Technology Professionals';
  constructor(private metaTagService: Meta) {}

  ngOnInit() {

    this.metaTagService.addTags([
    { name: 'author', content: 'Technology Professionals' },
    { name: 'description', content: 'Technology Professionals' },
    { name: 'keywords', content: 'creative, works, showcase, portfolio, highlight, projects, modern, agency, digital, studio, css, animation, transition, freelancers' },
  ]);
  }
}
