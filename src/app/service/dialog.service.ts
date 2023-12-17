import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  constructor(private alertController: AlertController) {}

  async showConfirmDialog(message: string): Promise<boolean> {
    const alert = await this.alertController.create({
      header: 'Confirm Delete',
      message: message,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            return false;
          },
        },
        {
          text: 'Delete',
          role: 'delete',

          handler: () => {
            return true;
          },
        },
      ],
    });

    await alert.present();
    const result = await alert.onDidDismiss();
    return result.role === 'delete';
  }
}
