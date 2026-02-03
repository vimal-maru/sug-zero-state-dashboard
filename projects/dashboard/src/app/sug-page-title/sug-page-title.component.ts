import { Component, Input } from '@angular/core';
import { NgIf, NgSwitch, NgSwitchCase } from '@angular/common';
import { HeadingTags } from '../model/heading-types';

@Component({
  selector: 'sug-page-title',
  imports: [NgSwitch, NgSwitchCase, NgIf],
  templateUrl: './sug-page-title.component.html',
  styleUrl: './sug-page-title.component.css',
})
export class SugPageTitleComponent {
  @Input({ required: true })
  title!: string;

  @Input()
  subtitle?: string;

  @Input()
  titleTag?: HeadingTags = 'h3';
}
