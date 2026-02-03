import { Component, signal } from '@angular/core';

@Component({
  selector: 'sug-advertisement',
  imports: [],
  templateUrl: './sug-advertisement.component.html',
  styleUrl: './sug-advertisement.component.css',
})
export class SugAdvertisementComponent {
  showAd = signal(false);

  hideAd(): void {
    this.showAd.set(false);
  }
}
