import { Component, OnInit } from '@angular/core';
import { Ad, AdCategory } from 'src/models/ad.model';
import { AdService } from '../../service/ad.service';
import { Router } from '@angular/router';
import { SharedService } from '../../service/shared.service';
import { DialogService } from 'src/app/service/dialog.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-ads-list',
  templateUrl: './ads-list.component.html',
  styleUrls: ['./ads-list.component.scss'],
})
export class AdsListComponent implements OnInit {
  ads: Ad[] = [];
  selectedCategories: AdCategory[] = [];

  constructor(
    private adService: AdService,
    private router: Router,
    private sharedService: SharedService,
    private dialogService: DialogService,
    private toastController: ToastController
  ) {}

  ngOnInit(): void {
    this.loadAds();
    this.sharedService.adsUpdated$.subscribe(() => this.loadAds());
  }

  loadAds() {
    this.adService.getAds().subscribe((ads) => {
      console.log('fetched Ads...');
      if (this.selectedCategories.length !== 0) {
        this.ads = ads.filter((ad) => this.selectedCategories.includes(ad.category));
      } else {
        this.ads = ads;
      }
    });
  }

  onCategorySelected() {
    this.loadAds();
  }

  getCategoryIcon(category: AdCategory): string {
    switch (category) {
      case AdCategory.VEHICULES:
        return 'assets/car.png';
      case AdCategory.IMMOBILIER:
        return 'assets/house.png';
      case AdCategory.INFORMATIQUES_ET_MULTIMEDIA:
        return 'assets/media.png';
      default:
        return '';
    }
  }
  confirmDelete(ad: Ad): void {
    this.dialogService.showConfirmDialog('Are you sure you want to delete this ad?').then((confirmed) => {
      console.log(confirmed)
      if(confirmed){
        this.adService.deleteAd(ad.id).subscribe(
          () => {
            console.log('Ad deleted successfully:', ad);
            this.presentSuccessToast('Ad deleted successfully!');
          },
          (error) => {
            console.error('Error deleting ad:', error);
            this.presentFailureToast('Error deleting ad. Please try again.');
          }
        );
        }
    });
  }
  

  navigateToAdDetails(ad: Ad) {
    this.sharedService.setSelectedAd(ad);
    this.router.navigate(['ads/ads-list', ad.id]);
  }

  async presentSuccessToast(message: string): Promise<void> {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      cssClass: 'success-toast',
      color: 'success',
    });
    toast.present();
  }

  async presentFailureToast(message: string): Promise<void> {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      cssClass: 'error-toast',
      color: 'danger',
    });
    toast.present();
  }
}

