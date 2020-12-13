import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HikingDiaryComponent } from './hiking-diary.component';

describe('HikingDiaryComponent', () => {
  let component: HikingDiaryComponent;
  let fixture: ComponentFixture<HikingDiaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HikingDiaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HikingDiaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
