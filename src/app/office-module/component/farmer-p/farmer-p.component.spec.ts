import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerPComponent } from './farmer-p.component';

describe('FarmerPComponent', () => {
  let component: FarmerPComponent;
  let fixture: ComponentFixture<FarmerPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
