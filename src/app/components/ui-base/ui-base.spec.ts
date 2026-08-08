import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiBase } from './ui-base';

describe('UiBase', () => {
  let component: UiBase;
  let fixture: ComponentFixture<UiBase>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiBase],
    }).compileComponents();

    fixture = TestBed.createComponent(UiBase);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
