import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class HomePage {

  busy = false;

  open() {
    this.busy = true;
    const ref = (window as any).cordova.InAppBrowser.open('https://ionicframework.com', '_blank', 'hidden=yes');
    ref.addEventListener('loadstop', () => {
      ref.show();
      this.busy = false;
    });
  }

}
