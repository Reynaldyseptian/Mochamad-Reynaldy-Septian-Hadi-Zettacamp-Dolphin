import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAnimalFormComponent } from './admin-animal-form.component';

describe('AdminAnimalFormComponent', () => {
  let component: AdminAnimalFormComponent;
  let fixture: ComponentFixture<AdminAnimalFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAnimalFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAnimalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
