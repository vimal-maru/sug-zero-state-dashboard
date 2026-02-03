import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SugPageTitleComponent } from './sug-page-title.component';

describe('SugPageTitleComponent', () => {
  let component: SugPageTitleComponent;
  let fixture: ComponentFixture<SugPageTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SugPageTitleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SugPageTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
