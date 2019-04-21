import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SettingsService } from '../../_shared_services/settings.service';
import { Observable } from 'rxjs';
import { SecondaryModel } from '../../model/secondary';

@Injectable({
  providedIn: 'root'
})
export class SecondaryService {
  private schoolsUrl: string;

  constructor(private http: HttpClient, private settings: SettingsService) {
    this.schoolsUrl = `${this.settings.getApiUrl()}secondary/secondaryschools/`;
  }

  getSecondarySchoolById(id: Number): Observable<SecondaryModel> {
    const url = `${this.schoolsUrl}` + id;
    return this.http.get<SecondaryModel>(url);
  }
}
