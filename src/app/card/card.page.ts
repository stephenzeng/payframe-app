import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
declare const payframe: any;

@Component({
  selector: 'app-card',
  templateUrl: './card.page.html',
  styleUrls: ['./card.page.scss'],
})
export class CardPage implements OnInit {
  private payframeElement: any;
  
  constructor(private modalController: ModalController) { }

  ngOnInit() {
    const merchantUUID = '5c8b151c3da49';
      const apiKey = 'mb9hdlmf';
      const src = 'https://securetest.merchantwarrior.com/payframe/';
      const submitUrl = 'https://base.merchantwarrior.com/payframe/';

      const style = {
        width: "100%",
        payframeHeightScaling: "dynamic",
        cardTypeDisplay: "none",        
        formLayout: 1,
        cardIconSet: 2,
        fieldAutoTabbing: "enabled"        
      };
      this.payframeElement = new payframe(
        merchantUUID,
        apiKey,
        'card-details',
        src,
        submitUrl,
        style,
        "getPayframeToken"
      );
      
      this.payframeElement.mwCallback = (tokenStatus, payframeToken, payframeKey) => {
        console.log(tokenStatus, payframeToken, payframeKey);
        if (tokenStatus == 'HAS_TOKEN') {          
          this.payframeElement.disable();
        }        
      }

      this.payframeElement.deploy();
  }

  pay() {
    console.log('pay clicked');
    this.payframeElement.submitPayframe();
  }

  async dismiss() {
    await this.modalController.dismiss();
  }

}
