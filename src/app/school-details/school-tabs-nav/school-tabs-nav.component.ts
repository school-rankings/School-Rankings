import { Component, OnInit, Input } from '@angular/core';
import { School } from '../../model/school';

@Component({
  selector: 'app-school-tabs-nav',
  templateUrl: './school-tabs-nav.component.html',
  styleUrls: ['./school-tabs-nav.component.scss']
})

export class SchoolTabsNavComponent implements OnInit {

  @Input() prePrimaryFlag: boolean;
  @Input() primaryFlag: boolean;
  @Input() middleFlag: boolean;
  @Input() secondaryFlag: boolean;
  @Input() seniorSecondaryFlag: boolean;

  school: School;
  constructor() {
    
this.school = JSON.parse(localStorage.getItem('school'));

  }

  ngOnInit() { 
    console.log('Flag: ',this.prePrimaryFlag);
  }

}
