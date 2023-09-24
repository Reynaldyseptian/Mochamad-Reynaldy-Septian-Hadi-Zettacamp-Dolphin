import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAnimalCardComponent } from './admin-animal-card.component';

describe('AdminAnimalCardComponent', () => {
  let component: AdminAnimalCardComponent;
  let fixture: ComponentFixture<AdminAnimalCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAnimalCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAnimalCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
