import { Component, OnInit, Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SchoolService } from '../../_shared_services/school.service';
import { School} from '../../model/school';

@Component({
  selector: 'app-school-detail',
  templateUrl: './school-overview.component.html',
  styleUrls: ['./school-overview.component.scss']
})


export class SchoolOverviewComponent implements OnInit {
  school: School[];
  id: Number;

  public pie_ChartData = [
    ['Distribution', 'Gender'],
    ['Girls', 291],
    ['Boys', 352]
  ];

  public bar_ChartData = [
    ['Students', 'Seats'],
    ['Total Seats (150)', 150],
    ['Applied (80)', 80],
    ['Accepted (50)', 50]
  ];

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

  constructor(
    private _activatedRoute: ActivatedRoute,
    private schoolService: SchoolService
  ) { }

  ngOnInit() {

    this.id = this._activatedRoute.snapshot.params.id;
    this.getSchool(this.id);

  }

  async getSchool(id: Number) {

    await this.schoolService.getSchoolById(this.id).subscribe(data => {
      this.school = data;
      localStorage.setItem('school', JSON.stringify(this.school));
    });

  }

}
