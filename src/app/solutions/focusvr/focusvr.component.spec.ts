import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FocusvrComponent } from './focusvr.component';

describe('FocusvrComponent', () => {
  let component: FocusvrComponent;
  let fixture: ComponentFixture<FocusvrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FocusvrComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FocusvrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
