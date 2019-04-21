import { Component, OnInit, Input } from '@angular/core';
import { School } from '../../model/school';

@Component({
  selector: 'app-school-tabs-nav',
  templateUrl: './school-tabs-nav.component.html',
  styleUrls: ['./school-tabs-nav.component.scss']
})

export class SchoolTabsNavComponent implements OnInit {

  @Input() prePrimaryFlag: boolean;
  school: School;
  constructor() {
    
this.school = JSON.parse(localStorage.getItem('school'));

  }

  ngOnInit() { 
    console.log('Flag: ',this.prePrimaryFlag);
  }

}
