import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProjectRequestComponent } from './add-project-request.component';

describe('AddProjectRequestComponent', () => {
  let component: AddProjectRequestComponent;
  let fixture: ComponentFixture<AddProjectRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProjectRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProjectRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
