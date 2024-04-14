import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetecAdhdComponent } from './detec-adhd.component';

describe('DetecAdhdComponent', () => {
  let component: DetecAdhdComponent;
  let fixture: ComponentFixture<DetecAdhdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetecAdhdComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetecAdhdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
