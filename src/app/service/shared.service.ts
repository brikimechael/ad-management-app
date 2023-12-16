import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Ad } from 'src/models/ad.model';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private adsUpdatedSource = new BehaviorSubject<boolean>(false);
  adsUpdated$ = this.adsUpdatedSource.asObservable();

  private selectedAdSource = new BehaviorSubject<Ad | null>(null);
  selectedAd$ = this.selectedAdSource.asObservable();

  updateAds() {
    this.adsUpdatedSource.next(true);
  }

  setSelectedAd(ad: Ad | null): void {
    this.selectedAdSource.next(ad);
  }

  getSelectedAd(): Observable<Ad | null> {
    return this.selectedAdSource.asObservable();
  }
}
