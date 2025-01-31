import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})

export class HeaderComponent implements OnInit {
  @Output() public sidenavToggle = new EventEmitter();

  isOpen = false;

  constructor() {}

  ngOnInit() {}

  public onMenuToggle = () => {
    this.isOpen = !this.isOpen;
  }
}
