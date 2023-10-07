import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAuditionComponent } from './form-audition.component';

describe('FormAuditionComponent', () => {
  let component: FormAuditionComponent;
  let fixture: ComponentFixture<FormAuditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAuditionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormAuditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
