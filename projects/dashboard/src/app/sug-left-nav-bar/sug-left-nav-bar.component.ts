import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SugLeftNavLink } from '../interface/sug-left-nav-link';
import { SugIconComponent } from '../sug-icon/sug-icon.component';

@Component({
  selector: 'sug-left-nav-bar',
  imports: [SugIconComponent],
  templateUrl: './sug-left-nav-bar.component.html',
  styleUrl: './sug-left-nav-bar.component.css',
})
export class SugLeftNavBarComponent {
  @Input({ required: true }) links!: SugLeftNavLink[];

  @Input() showCreate = true;

  @Input() createDisabled = false;

  @Output()
  linkSelected = new EventEmitter<SugLeftNavLink>();

  activeIndex?: number | null = null;

  selectedNav(link: SugLeftNavLink, index: number): void {
    if (link.isDisabled) return;

    this.activeIndex = index;
    this.linkSelected.emit(link);
  }
}
