import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VteaComponent } from './vtea.component';

describe('VteaComponent', () => {
  let component: VteaComponent;
  let fixture: ComponentFixture<VteaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VteaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VteaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
