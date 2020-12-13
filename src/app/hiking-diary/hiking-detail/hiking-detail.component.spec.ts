import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HikingDetailComponent } from './hiking-detail.component';

describe('HikingDetailComponent', () => {
  let component: HikingDetailComponent;
  let fixture: ComponentFixture<HikingDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HikingDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HikingDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
