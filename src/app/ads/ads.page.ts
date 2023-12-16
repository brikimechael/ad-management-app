import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ads',
  templateUrl: './ads.page.html',
  styleUrls: ['./ads.page.scss'],
})
export class AdsPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateToCreateAd() {
    this.router.navigate(['ads','create-ad']);
  }

  navigateToAdsList() {
    this.router.navigate(['ads','ads-list']);
  }
}
