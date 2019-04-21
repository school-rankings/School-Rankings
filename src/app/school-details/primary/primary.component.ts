import { Component, OnInit, AfterContentInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PrimaryService } from '../_services/primary.service';
import { Primary } from '../../model/primary';
import { School } from '../../model/school';

@Component({
  selector: 'app-primary',
  templateUrl: './primary.component.html',
  styleUrls: ['./primary.component.scss']
})
export class PrimaryComponent implements OnInit, AfterContentInit {

  primaryAsync: Primary;
  id: Number;
  school: School;
  primaryLocal: Primary;
  remSeats: number;
  primary: boolean = true;

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
    private primaryService: PrimaryService) {

    this.school = JSON.parse(localStorage.getItem('school'));
   
    
  }

  ngOnInit() {

    this.id = this._activatedRoute.snapshot.params.id;
    console.log('ID: ', this.id);
    this.getSchool(this.id);
   
  }

  ngAfterContentInit(){

    this.primaryLocal = JSON.parse(localStorage.getItem('primary'));
   
    this.bar_ChartData = [['Students', 'Seats'],
    ['Total Seats ('+ this.primaryLocal.primary_school_seats_count + ')', this.primaryLocal.primary_school_seats_count],
    ['Applied ('+ this.primaryLocal.primary_school_students_applied_count + ')', this.primaryLocal.primary_school_students_applied_count],
    ['Accepted ('+ this.primaryLocal.primary_school_students_accepted_count + ')', this.primaryLocal.primary_school_students_accepted_count]];
    

    this.remSeats = this.primaryLocal.primary_school_seats_count - this.primaryLocal.primary_school_students_accepted_count;
    console.log('REM SEATS: ', this.remSeats);
  }

   getSchool(id: Number) {

    this.primaryService.getPrimarySchoolById(this.id).subscribe(data => {

      console.log('Data: ', data);
      this.primaryAsync = data;
     localStorage.setItem('primary',JSON.stringify(this.primaryAsync));
    });
    
  }

}
