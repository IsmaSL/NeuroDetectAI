import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtdahComponent } from './virtdah.component';

describe('VirtdahComponent', () => {
  let component: VirtdahComponent;
  let fixture: ComponentFixture<VirtdahComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VirtdahComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VirtdahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
