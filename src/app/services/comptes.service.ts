import { Injectable } from '@angular/core';
import { Compte } from '../domain/compte';
import { HttpClient } from '../../../node_modules/@types/selenium-webdriver/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComptesService {
private URL='' ;
  constructor( private _http: HttpClient) { }
getAllComptes():Observable <Compte[]> {
  return this._http.get<Compte[]>(this.URL);




  //  { 'numero': 'Fake001', 'proprietaire': 'FakeProprio1', 'solde': '1111' },
   // { 'numero': 'Fake002', 'proprietaire': 'FakeProprio2', 'solde': '1111' },
   // { 'numero': 'Fake003', 'proprietaire': 'FakeProprio3', 'solde': '1111' },
 //]
  }
}



