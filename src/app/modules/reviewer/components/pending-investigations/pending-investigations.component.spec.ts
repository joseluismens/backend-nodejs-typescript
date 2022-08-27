import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingInvestigationsComponent } from './pending-investigations.component';

describe('PendingInvestigationsComponent', () => {
  let component: PendingInvestigationsComponent;
  let fixture: ComponentFixture<PendingInvestigationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendingInvestigationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingInvestigationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
