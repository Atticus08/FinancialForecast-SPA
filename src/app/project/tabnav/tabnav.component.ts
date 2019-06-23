import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabnav',
  templateUrl: './tabnav.component.html',
  styleUrls: ['./tabnav.component.css'],
  encapsulation: ViewEncapsulation.None,
})

export class TabnavComponent implements OnInit {
  navLinks: any[];
  activeLinkIndex = 0;

  constructor(private router: Router) {
    this.navLinks = [
      {
        label: 'summary',
        link: 'summary',
        index: 0
      },
      {
        label: 'staffing',
        link: 'staffing',
        index: 1
      },
      {
        label: 'details',
        link: 'details',
        index: 2
      },
    ];
  }
  ngOnInit() {
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
    });
  }
}
