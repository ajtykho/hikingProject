import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HikingEditComponent } from './hiking-edit.component';

describe('HikingEditComponent', () => {
  let component: HikingEditComponent;
  let fixture: ComponentFixture<HikingEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HikingEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HikingEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
