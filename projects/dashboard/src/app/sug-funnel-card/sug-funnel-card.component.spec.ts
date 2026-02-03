import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SugFunnelCardComponent } from './sug-funnel-card.component';

describe('SugFunnelCardComponent', () => {
  let component: SugFunnelCardComponent;
  let fixture: ComponentFixture<SugFunnelCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SugFunnelCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SugFunnelCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
