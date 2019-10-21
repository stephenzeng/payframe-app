import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CardPage } from '../card/card.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private modalController: ModalController) {}

  async onClicked() {
    const modal = await this.modalController.create({
      component: CardPage
    });
    await modal.present();
  }

}
