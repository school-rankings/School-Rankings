import { Component, OnInit, AfterContentInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeniorSecondaryService } from '../_services/senior-secondary.service';
import { SeniorSecondary } from '../../model/senior-secondary';
import { School } from '../../model/school';

@Component({
  selector: 'app-senior-secondary',
  templateUrl: './senior-secondary.component.html',
  styleUrls: ['./senior-secondary.component.scss']
})
export class SeniorSecondaryComponent implements OnInit, AfterContentInit {


  seniorSecondaryAsync: SeniorSecondary;
  id: Number;
  school: School;
  seniorSecondaryLocal: SeniorSecondary;
  remSeats: number;
  seniorSecondary: boolean = true;

  public bar_ChartData = [];
  public pie_ChartData = [
    ['Distribution', 'Gender'],
    ['Girls', 291],
    ['Boys', 352]
  ];

  public pie_ChartOptions = {
    pieHole: 0.8,
    pieSliceTextStyle: {
        color: 'black',
    },
    slices: {
        0: {color: '#7ec252'},
        1: {color: '#cfe4ad'}
    },
    legend: {
        position: 'bottom'
    },
    title: 'Segregation',
    chartArea: {left: 0, top: 60, width: '100%', height: '60%'},
    pieSliceText: 'none'
};

  public bar_ChartOptions = {
    title: 'Students',
    width: 430,
    legend: { position: 'none' },
    chart: {
      title: 'Students',
      subtitle: '(full time)'
    },
    bars: 'horizontal', // Required for Material Bar Charts.
    axes: {
      x: {
        0: { side: 'top', label: 'Students' } // Top x-axis.
      }
    },
    bar: { groupWidth: '50%' }
  };


  constructor(private _activatedRoute: ActivatedRoute,
    private seniorSecondaryService: SeniorSecondaryService) {

    this.school = JSON.parse(localStorage.getItem('school'));
   
    
  }

  ngOnInit() {

    this.id = this._activatedRoute.snapshot.params.id;
    console.log('ID: ', this.id);
    this.getSchool(this.id);
   
  }

  ngAfterContentInit(){

    this.seniorSecondaryLocal = JSON.parse(localStorage.getItem('seniorsecondary'));
   
    this.bar_ChartData = [['Students', 'Seats'],
    ['Total Seats ('+ this.seniorSecondaryLocal.senior_secondary_school_seats_count + ')', this.seniorSecondaryLocal.senior_secondary_school_seats_count],
    ['Applied ('+ this.seniorSecondaryLocal.senior_secondary_school_students_applied_count + ')', this.seniorSecondaryLocal.senior_secondary_school_students_applied_count],
    ['Accepted ('+ this.seniorSecondaryLocal.senior_secondary_school_students_accepted_count + ')', this.seniorSecondaryLocal.senior_secondary_school_students_accepted_count]];
    

    this.remSeats = this.seniorSecondaryLocal.senior_secondary_school_seats_count - this.seniorSecondaryLocal.senior_secondary_school_students_accepted_count;
    console.log('REM SEATS: ', this.remSeats);
  }

   getSchool(id: Number) {
console.log('ENTEREDD!!!');
    this.seniorSecondaryService.getSeniorSecondarySchoolById(this.id).subscribe(data => {
      console.log('Data: ', data);
      this.seniorSecondaryAsync = data;
     localStorage.setItem('seniorsecondary',JSON.stringify(this.seniorSecondaryAsync));
    });
    
  }


}
