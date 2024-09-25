import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetallsubjectsComponent } from './getallsubjects.component';

describe('GetallsubjectsComponent', () => {
  let component: GetallsubjectsComponent;
  let fixture: ComponentFixture<GetallsubjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetallsubjectsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetallsubjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
