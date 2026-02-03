import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SugAdvertisementComponent } from './sug-advertisement.component';

describe('SugAdvertisementComponent', () => {
  let component: SugAdvertisementComponent;
  let fixture: ComponentFixture<SugAdvertisementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SugAdvertisementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SugAdvertisementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
