import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StickyctaComponent } from './stickycta.component';

describe('StickyctaComponent', () => {
  let component: StickyctaComponent;
  let fixture: ComponentFixture<StickyctaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StickyctaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StickyctaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
