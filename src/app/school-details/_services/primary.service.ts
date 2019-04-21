import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SettingsService } from '../../_shared_services/settings.service';
import { Observable } from 'rxjs';
import { PrimaryModel } from '../../model/primary';

@Injectable({
  providedIn: 'root'
})
export class PrimaryService {
  private schoolsUrl: string;

  constructor(private http: HttpClient, private settings: SettingsService) {
    this.schoolsUrl = `${this.settings.getApiUrl()}primary/primaryschools/`;
  }

  getPrimarySchoolById(id: Number): Observable<PrimaryModel> {
    const url = `${this.schoolsUrl}` + id;
    return this.http.get<PrimaryModel>(url);
  }
}
