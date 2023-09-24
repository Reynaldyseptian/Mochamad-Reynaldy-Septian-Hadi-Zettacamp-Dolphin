import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAnimalDetailComponent } from './admin-animal-detail.component';

describe('AdminAnimalDetailComponent', () => {
  let component: AdminAnimalDetailComponent;
  let fixture: ComponentFixture<AdminAnimalDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAnimalDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAnimalDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
