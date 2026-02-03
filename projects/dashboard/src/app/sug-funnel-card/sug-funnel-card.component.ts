import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'sug-funnel-card',
  imports: [CardModule, NgIf],
  templateUrl: './sug-funnel-card.component.html',
  styleUrl: './sug-funnel-card.component.css',
})
export class SugFunnelCardComponent {
  @Input({ required: true }) title!: string;
  @Input({ required: true }) desc!: string;
  @Input() img!: string;
  @Input() cardLink?: string;
}
