import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HshopComponent } from './hshop.component';

describe('HshopComponent', () => {
  let component: HshopComponent;
  let fixture: ComponentFixture<HshopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HshopComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
