import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Ad, AdCategory } from 'src/models/ad.model';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root',
})
export class AdService {
  updateAd(ad: Ad):Observable<Ad> {
    return this.http.put<Ad>(`${this.apiUrl}/${ad.id}`, ad).pipe(
      tap(() => this.sharedService.updateAds())
    );

  }
  getAdsByCategory(selectedCategory: AdCategory) {
    throw new Error('Method not implemented.');
  }
  private apiUrl = 'http://localhost:8080/api/ads';

  constructor(private http: HttpClient,private sharedService: SharedService) {}

  getAds(): Observable<Ad[]> {
    return this.http.get<Ad[]>(this.apiUrl);
  }

  getAdById(id: number): Observable<Ad> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Ad>(url);
  }

  createAd(adData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, adData).pipe(
      tap(() => this.sharedService.updateAds())
    );
  }

  deleteAd(id: number|undefined): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url).pipe(
      tap(() => this.sharedService.updateAds())
    );
  }
}
