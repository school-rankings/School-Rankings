import { Component, OnInit, AfterContentInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SecondaryService } from '../_services/secondary.service';
import { Secondary } from '../../model/secondary';
import { School } from '../../model/school';

@Component({
  selector: 'app-secondary',
  templateUrl: './secondary.component.html',
  styleUrls: ['./secondary.component.scss']
})
export class SecondaryComponent implements OnInit, AfterContentInit {

 
  secondaryAsync: Secondary;
  id: Number;
  school: School;
  secondaryLocal: Secondary;
  remSeats: number;
  secondary: boolean = true;

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
    private secondaryService: SecondaryService) {

    this.school = JSON.parse(localStorage.getItem('school'));
   
    
  }

  ngOnInit() {

    this.id = this._activatedRoute.snapshot.params.id;
    console.log('ID: ', this.id);
    this.getSchool(this.id);
   
  }

  ngAfterContentInit(){

    this.secondaryLocal = JSON.parse(localStorage.getItem('secondary'));
   
    this.bar_ChartData = [['Students', 'Seats'],
    ['Total Seats ('+ this.secondaryLocal.secondary_school_seats_count + ')', this.secondaryLocal.secondary_school_seats_count],
    ['Applied ('+ this.secondaryLocal.secondary_school_students_applied_count + ')', this.secondaryLocal.secondary_school_students_applied_count],
    ['Accepted ('+ this.secondaryLocal.secondary_school_students_accepted_count + ')', this.secondaryLocal.secondary_school_students_accepted_count]];
    

    this.remSeats = this.secondaryLocal.secondary_school_seats_count - this.secondaryLocal.secondary_school_students_accepted_count;
    console.log('REM SEATS: ', this.remSeats);
  }

   getSchool(id: Number) {
console.log('ENTEREDD!!!');
    this.secondaryService.getSecondarySchoolById(this.id).subscribe(data => {
      console.log('Data: ', data);
      this.secondaryAsync = data;
     localStorage.setItem('secondary',JSON.stringify(this.secondaryAsync));
    });
    
  }
}
