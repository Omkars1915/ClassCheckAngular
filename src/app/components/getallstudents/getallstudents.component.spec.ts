import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetallstudentsComponent } from './getallstudents.component';

describe('GetallstudentsComponent', () => {
  let component: GetallstudentsComponent;
  let fixture: ComponentFixture<GetallstudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetallstudentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetallstudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
