import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdCategory } from 'src/models/ad.model';
import { AdService } from '../../service/ad.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-ad',
  templateUrl: './create-ad.component.html',
  styleUrls: ['./create-ad.component.scss'],
})
export class CreateAdComponent {

  adForm: FormGroup;
  adCategories: AdCategory[] = Object.values(AdCategory);

  constructor(
    private formBuilder: FormBuilder,
    private adService: AdService,
    private toastController: ToastController, 
       private router: Router 
  ) {
    this.adForm = this.formBuilder.group({
      name: ['', Validators.required],
      category: ['', Validators.required],
      price: [null, [Validators.required, Validators.min(0)]],
      picture: [''],
      description:[''],
      location: ['', Validators.required],
      phoneNumber: ['', [Validators.required, Validators.pattern('[0-9]{8}')]],
      stillAvailable: [true],
    });
  }

  get name() { return this.adForm.get('name'); }
  get category() { return this.adForm.get('category'); }
  get price() { return this.adForm.get('price'); }
  get location() { return this.adForm.get('location'); }
  get phoneNumber() { return this.adForm.get('phoneNumber'); }
  get description() { return this.adForm.get('description'); }


  async presentToast(message: string, color: string, icon: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      cssClass: 'global-toast',
      color,
      buttons: [
        {
          icon,
          role: 'cancel',
        },
      ],
    });
    toast.present();
  }

  async presentSuccessToast() {
    const successMessage = 'Ad created successfully!';
    this.presentToast(successMessage, 'success', 'add-circle');
    this.router.navigate(['/ads/ads-list']); 

  }

  async presentFailureToast() {
    const failureMessage = 'Error creating ad. Please try again.';
    this.presentToast(failureMessage, 'danger', 'close-circle');
  }

  onSubmit() {
    if (this.adForm.valid) {
      const adData = this.adForm.value;
      console.log(adData);
      this.adService.createAd(adData).subscribe(
        (response) => {
          console.log('Ad created successfully:', response);
          this.presentSuccessToast();
        },
        (error) => {
          console.error('Error creating ad:', error);
          this.presentFailureToast();
        }
      );
    } else {
      Object.keys(this.adForm.controls).forEach(key => {
        this.adForm.get(key)?.markAsTouched();
      });
    }
  }
}
