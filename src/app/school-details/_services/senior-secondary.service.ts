import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SettingsService } from '../../_shared_services/settings.service';
import { Observable } from 'rxjs';
import { SeniorSecondaryModel } from '../../model/senior-secondary';

@Injectable({
  providedIn: 'root'
})
export class SeniorSecondaryService {
  private schoolsUrl: string;

  constructor(private http: HttpClient, private settings: SettingsService) {
    this.schoolsUrl = `${this.settings.getApiUrl()}seniorsecondary/seniorsecondaryschools/`;
  }

  getSeniorSecondarySchoolById(id: Number): Observable<SeniorSecondaryModel> {
    const url = `${this.schoolsUrl}` + id;
    return this.http.get<SeniorSecondaryModel>(url);
  }
}
