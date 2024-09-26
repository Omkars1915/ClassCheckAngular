import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeattendaceComponent } from './takeattendace.component';

describe('TakeattendaceComponent', () => {
  let component: TakeattendaceComponent;
  let fixture: ComponentFixture<TakeattendaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TakeattendaceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TakeattendaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
