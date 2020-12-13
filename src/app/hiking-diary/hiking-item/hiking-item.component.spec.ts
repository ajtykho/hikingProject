import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HikingItemComponent } from './hiking-item.component';

describe('HikingItemComponent', () => {
  let component: HikingItemComponent;
  let fixture: ComponentFixture<HikingItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HikingItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HikingItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
