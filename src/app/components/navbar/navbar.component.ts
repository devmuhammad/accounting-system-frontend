import { Component, OnInit, Input } from '@angular/core';
import { MatSidenavModule  } from '@angular/material';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() inputSideNav: MatSidenavModule;

  username = 'Muhammad';
  lastname = 'Olacoded';
  initials = '';
  counter = 0;
  constructor() { }

  ngOnInit() {
    this.initials = this.username.charAt(0)+this.lastname.charAt(0);
  }

  private increaseCounter(this) {
    this.counter++;
  }

  public getCounter(){
    return this.counter;
  }
}
