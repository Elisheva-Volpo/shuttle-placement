import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacementShuttleSystemComponent } from './placement-shuttle-system.component';

describe('PlacementShuttleSystemComponent', () => {
  let component: PlacementShuttleSystemComponent;
  let fixture: ComponentFixture<PlacementShuttleSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlacementShuttleSystemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlacementShuttleSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
