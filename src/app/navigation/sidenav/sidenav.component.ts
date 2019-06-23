import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent implements OnInit {
  @Output() sidenavToggle = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  public onSidenavToggle = () => {
    this.sidenavToggle.emit();
  }
}
