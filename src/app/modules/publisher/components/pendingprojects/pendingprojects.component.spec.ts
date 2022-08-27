import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingprojectsComponent } from './pendingprojects.component';

describe('PendingprojectsComponent', () => {
  let component: PendingprojectsComponent;
  let fixture: ComponentFixture<PendingprojectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendingprojectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingprojectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
