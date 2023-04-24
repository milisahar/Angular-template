import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Donation } from 'app/Modal/donation';
import { DonationService } from 'app/services/donation.service';

@Component({
  selector: 'app-add-donation',
  templateUrl: './add-donation.component.html',
  styleUrls: ['./add-donation.component.scss']
})
export class AddDonationComponent implements OnInit {

  donation : Donation= new Donation();

  constructor( private donationService: DonationService,
    private router :Router) { }

  ngOnInit(): void {
  }
  saveDonation(){
    return this.donationService.addDonation(this.donation).subscribe(data =>{
      console.log(data);
      this.goToDonationList();
    })
  }
  goToDonationList(){
    this.router.navigate(['/donations']);
  }
  onSubmit(){
    console.log(this.donation);
    this.saveDonation();
  }

}
