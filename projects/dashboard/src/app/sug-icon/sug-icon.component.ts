import { Component, Input } from '@angular/core';

@Component({
  selector: 'sug-icon',
  imports: [],
  templateUrl: './sug-icon.component.html',
  styleUrl: './sug-icon.component.css',
})
export class SugIconComponent {
  private _color: string = '#919e55';
  private _size: string = '32px';

  @Input({ required: true }) icon!: string;

  @Input() weight: string = 'fa-solid';

  @Input()
  set color(value: string | undefined) {
    this._color = value || '#919e55';
  }

  get color() {
    return this._color;
  }

  @Input()
  set size(value: string | undefined) {
    this._size = value || '32px';
  }

  get size() {
    return this._size;
  }

  get iconClasses(): string {
    return `${this.weight} ${this.icon}`;
  }
}
