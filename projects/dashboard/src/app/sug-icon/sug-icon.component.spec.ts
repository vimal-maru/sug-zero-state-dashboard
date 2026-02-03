import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SugIconComponent } from './sug-icon.component';

describe('SugIconComponent', () => {
  let component: SugIconComponent;
  let fixture: ComponentFixture<SugIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SugIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SugIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
