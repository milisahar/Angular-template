import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Donation } from 'app/Modal/donation';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DonationService {
  private baseURL= 'http://localhost:8081'
  constructor( private httpClient : HttpClient) {  }
    getListDonations() : Observable<Donation[]>{
      return this.httpClient.get<Donation[]>(`${this.baseURL}/listDonation`);
    }
    addDonation(donation: Donation) : Observable<any>{
      return this.httpClient.post(`${this.baseURL}/add`,donation)
    }
    getDonationById(id: number) : Observable<Donation>{
      return this.httpClient.get<Donation>(`${this.baseURL}/findById/${id}`);
    }
}
