import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SettingsService } from '../../_shared_services/settings.service';
import { Observable } from 'rxjs';
import { MiddleModel } from '../../model/middle';

@Injectable({
  providedIn: 'root'
})
export class MiddleService {
  private schoolsUrl: string;

  constructor(private http: HttpClient, private settings: SettingsService) {
    this.schoolsUrl = `${this.settings.getApiUrl()}middle/middleschools/`;
  }

  getMiddleSchoolById(id: Number): Observable<MiddleModel> {
    const url = `${this.schoolsUrl}` + id;
    return this.http.get<MiddleModel>(url);
  }
}
