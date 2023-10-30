import { Injectable } from '@angular/core';
import { Section } from '../model/db';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfiguratorService {
  configurl : string = "/configservice";
  config? : any;
  constructor(private http: HttpClient) {

  }

  getSection(oc: string | null): Observable<Section[]> {
    return this.http.get<Section[]>(`${this.configurl}?OrderCode=${oc}`);
  }
}
