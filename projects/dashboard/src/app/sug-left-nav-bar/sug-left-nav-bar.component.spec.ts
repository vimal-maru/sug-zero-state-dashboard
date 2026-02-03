import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SugLeftNavBarComponent } from './sug-left-nav-bar.component';

describe('SugLeftNavBarComponent', () => {
  let component: SugLeftNavBarComponent;
  let fixture: ComponentFixture<SugLeftNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SugLeftNavBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SugLeftNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
